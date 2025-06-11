import { ROUTES } from '@/shared/model/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { barbershopsApi } from './barbershops.api'

export function useDeleteBarbershop() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const deleteMutation = useMutation({
		mutationFn: barbershopsApi.deleteBarbershop,
		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [barbershopsApi.baseKey],
			})
		},
		onSuccess() {
			navigate(ROUTES.ADMIN_BARBERSHOPS)
			toast.info('Барбершоп удален')
		},
	})

	return {
		handleDelete: deleteMutation.mutate,
		getIsPending: (id: number) =>
			deleteMutation.isPending && deleteMutation.variables === id,
	}
}
