import { ROUTES } from '@/shared/model/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { barbershopsApi } from './barbershops.api'
import type { CreateBarbershopDto } from './dto'

export function useCreateBarbershop() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const createBarbershopMutation = useMutation({
		mutationKey: ['create-barbershop'],
		mutationFn: barbershopsApi.createBarbershop,

		onSuccess() {
			navigate(ROUTES.ADMIN_BARBERSHOPS)
			toast.success('Барбершоп создан')
		},

		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [barbershopsApi.baseKey],
				exact: false,
			})
		},
	})

	const handleCreate = async (barbershop: CreateBarbershopDto) => {
		await createBarbershopMutation.mutate(barbershop)
	}

	return {
		handleCreate,
		isPending: createBarbershopMutation.isPending,
		isError: createBarbershopMutation.isError,
		error: createBarbershopMutation.error,
	}
}
