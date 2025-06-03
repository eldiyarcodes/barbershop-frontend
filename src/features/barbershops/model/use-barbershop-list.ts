import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { barbershopsApi } from './barbershops.api'

export function useBarbershopList({ search }: { search?: string }) {
	const barbershopQuery = useQuery({
		...barbershopsApi.getBarbershopsQueryOptions(search ?? ''),
		placeholderData: keepPreviousData,
	})

	return {
		data: barbershopQuery.data,
		refetch: barbershopQuery.refetch,
		isPending: barbershopQuery.isPending,
	}
}
