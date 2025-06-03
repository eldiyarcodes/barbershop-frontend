import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { barbershopApi } from './barbershop.api'

export function useBarbershop(id: number) {
	const barbershopQuery = useQuery({
		...barbershopApi.getBarbershopQueryOptions(id),
		placeholderData: keepPreviousData,
	})

	return {
		data: barbershopQuery.data,
		isPending: barbershopQuery.isPending,
	}
}
