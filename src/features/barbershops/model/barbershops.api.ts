import { $mainApi } from '@/shared/api/api-instance'
import { queryOptions } from '@tanstack/react-query'
import type { BarbershopListResponse } from './dto'

export const barbershopsApi = {
	baseKey: 'barbershops',

	getBarbershops: async (
		{ search }: { search: string },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $mainApi.get<BarbershopListResponse>('barbershop', {
			params: { search },
			signal,
		})
		return data.data
	},

	getBarbershopsQueryOptions: (search: string) => {
		return queryOptions({
			queryKey: [barbershopsApi.baseKey, 'list', search],
			queryFn: meta => barbershopsApi.getBarbershops({ search }, meta),
		})
	},
}
