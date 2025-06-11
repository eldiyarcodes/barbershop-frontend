import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { appointmentsApi } from './appointments.api'

export function useDeleteAppointment() {
	const queryClient = useQueryClient()

	const deleteMutation = useMutation({
		mutationFn: appointmentsApi.deleteAppointment,
		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [appointmentsApi.baseKey],
			})
		},
		onSuccess() {
			toast.info('Запись удален')
		},
	})

	return {
		handleDelete: deleteMutation.mutate,
		getIsPending: (id: number) =>
			deleteMutation.isPending && deleteMutation.variables === id,
	}
}
