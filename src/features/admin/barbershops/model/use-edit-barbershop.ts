import { ROUTES } from '@/shared/model/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { barbershopsApi } from './barbershops.api'
import type { CreateBarbershopDto } from './dto'

export function useEditBarbershop() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const changeBarbershopMutation = useMutation({
		mutationKey: ['edit-barbershop'],
		mutationFn: barbershopsApi.createBarbershop,

		onSuccess() {
			navigate(ROUTES.ADMIN_BARBERSHOPS)
			toast.success('Барбершоп изменен')
		},

		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [barbershopsApi.baseKey],
				exact: false,
			})
		},
	})

	const handleChange = async (barbershop: CreateBarbershopDto) => {
		await changeBarbershopMutation.mutate(barbershop)
	}

	return {
		handleChange,
		isPending: changeBarbershopMutation.isPending,
		isError: changeBarbershopMutation.isError,
		error: changeBarbershopMutation.error,
	}
}
