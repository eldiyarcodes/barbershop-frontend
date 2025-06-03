import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { barbershopsApi } from './barbershops.api'

export function useBarbershopList({ search }: { search?: string }) {
	const barbershopsQuery = useQuery({
		...barbershopsApi.getBarbershopsQueryOptions(search ?? ''),
		placeholderData: keepPreviousData,
	})

	return {
		data: barbershopsQuery.data,
		isPending: barbershopsQuery.isPending,
	}
}
