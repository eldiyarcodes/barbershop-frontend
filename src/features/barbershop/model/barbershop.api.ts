import { $mainApi } from '@/shared/api/api-instance'
import { queryOptions } from '@tanstack/react-query'
import type { BarbershopResponse, MastersReponse } from './dto'

export const barbershopApi = {
	baseKey: 'barbershop',

	getBarbershop: async (
		{ id }: { id: number },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $mainApi.get<BarbershopResponse>(
			`barbershop/${id}`,
			{
				signal,
			}
		)
		return data.data
	},

	getMasters: async (
		{ barbershopId }: { barbershopId: number },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $mainApi.get<MastersReponse>(`master`, {
			params: { barbershopId },
			signal,
		})
		return data.data
	},

	getBarbershopQueryOptions: (id: number) => {
		return queryOptions({
			queryKey: [barbershopApi.baseKey, 'single', id],
			queryFn: meta => barbershopApi.getBarbershop({ id }, meta),
		})
	},

	getMastersQueryOptions: (barbershopId: number) => {
		return queryOptions({
			queryKey: [barbershopApi.baseKey, 'masters', barbershopId],
			queryFn: meta => barbershopApi.getMasters({ barbershopId }, meta),
		})
	},
}
