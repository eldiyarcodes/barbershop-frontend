import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { barbershopApi } from './barbershop.api'

export function useMasters(id: number) {
	const mastersQuery = useQuery({
		...barbershopApi.getMastersQueryOptions(id),
		placeholderData: keepPreviousData,
	})

	return {
		masters: mastersQuery.data,
		isPending: mastersQuery.isPending,
	}
}
