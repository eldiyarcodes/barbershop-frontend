import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { barbershopsApi } from './barbershops.api'

export function useBarbershopsList({ search }: { search: string }) {
	const barbershopsQuery = useQuery({
		...barbershopsApi.getBarbershopsQueryOptions(search),
		placeholderData: keepPreviousData,
	})

	const errorMessage = barbershopsQuery.error
		? barbershopsQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		data: barbershopsQuery.data?.data,
		isLoading: barbershopsQuery.isLoading,
		errorMessage,
		refetch: barbershopsQuery.refetch,
	}
}
