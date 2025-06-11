import { ROUTES } from '@/shared/model/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { mastersApi } from './masters.api'

export function useDeleteMaster() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const deleteMutation = useMutation({
		mutationFn: mastersApi.deleteMaster,
		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [mastersApi.baseKey],
			})
		},
		onSuccess() {
			navigate(ROUTES.ADMIN_MASTERS)
			toast.info('Мастер удален')
		},
	})

	return {
		handleDelete: deleteMutation.mutate,
		getIsPending: (id: number) =>
			deleteMutation.isPending && deleteMutation.variables === id,
	}
}
