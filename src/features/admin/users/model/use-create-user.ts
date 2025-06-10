import { ROUTES } from '@/shared/model/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { usersApi } from './users.api'

export function useCreateUser() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const createMutation = useMutation({
		mutationKey: ['create-user'],
		mutationFn: usersApi.createUser,

		onSuccess() {
			navigate(ROUTES.ADMIN)
			toast.success('Пользователь создан')
		},

		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [usersApi.baseKey],
				exact: false,
			})
		},
	})

	const handleCreate = async (user: { email: string; password: string }) => {
		await createMutation.mutate(user)
	}

	return {
		handleCreate,
		isPending: createMutation.isPending,
		isError: createMutation.isError,
		error: createMutation.error,
	}
}
