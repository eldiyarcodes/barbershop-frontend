import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { barbershopsApi } from './barbershops.api'

export function useBarbershop({ id }: { id: number }) {
	const barbershopQuery = useQuery({
		...barbershopsApi.getBarbershopQueryOptions(id),
		placeholderData: keepPreviousData,
	})

	const errorMessage = barbershopQuery.error
		? barbershopQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		data: barbershopQuery.data?.data,
		isLoading: barbershopQuery.isLoading,
		errorMessage,
	}
}
