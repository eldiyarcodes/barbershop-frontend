import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { appointmentsApi } from './appointments.api'

export function useAppointmentsList({ search }: { search: string }) {
	const appointmentsQuery = useQuery({
		...appointmentsApi.getAppointmentsQueryOptions({ search }),
		placeholderData: keepPreviousData,
	})

	const errorMessage = appointmentsQuery.error
		? appointmentsQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		data: appointmentsQuery.data?.data,
		isLoading: appointmentsQuery.isLoading,
		errorMessage,
	}
}
