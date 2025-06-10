import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { usersApi } from './users.api'

export function useDeleteUser() {
	const queryClient = useQueryClient()

	const deleteMutation = useMutation({
		mutationFn: usersApi.deleteUser,
		async onSettled() {
			await queryClient.invalidateQueries({ queryKey: [usersApi.baseKey] })
		},
		onSuccess() {
			toast.info('Пользователь удален')
		},
	})

	return {
		handleDelete: deleteMutation.mutate,
		getIsPending: (id: number) =>
			deleteMutation.isPending && deleteMutation.variables === id,
	}
}
