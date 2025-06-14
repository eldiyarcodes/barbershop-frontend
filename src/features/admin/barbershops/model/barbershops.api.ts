import { $authApi } from '@/shared/api/api-instance'
import type { Barbershop } from '@/shared/model/types'
import { queryOptions } from '@tanstack/react-query'
import type { CreateBarbershopDto } from './dto'

type BarbershopsListDto = {
	status: string
	data: Barbershop[]
}

type BarbershopOkResponse = {
	status: string
	data: Barbershop
}

export const barbershopsApi = {
	baseKey: 'admin-barbershops',

	getAllBarbershops: async (
		{ search }: { search: string },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<BarbershopsListDto>('barbershop', {
			params: {
				search,
			},
			signal,
		})

		return data
	},

	createBarbershop: async (barbershop: CreateBarbershopDto) => {
		const { data } = await $authApi.post<BarbershopOkResponse>(
			'barbershop/create',
			barbershop
		)

		return data
	},

	editBarbershop: async ({
		id,
		barbershop,
	}: {
		id: number
		barbershop: CreateBarbershopDto
	}) => {
		const { data } = await $authApi.patch<BarbershopOkResponse>(
			`barbershop/${id}`,
			barbershop
		)

		return data
	},

	getBarbershopById: async (
		{ id }: { id: number },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<BarbershopOkResponse>(
			`barbershop/${id}`,
			{ signal }
		)
		return data
	},

	deleteBarbershop: async (id: number) => {
		await $authApi.delete(`barbershop/${id}`)
	},

	getBarbershopsQueryOptions: (search: string) => {
		return queryOptions({
			queryKey: [barbershopsApi.baseKey, 'barbershop-list', search],
			queryFn: meta => barbershopsApi.getAllBarbershops({ search }, meta),
		})
	},

	getBarbershopQueryOptions: (id: number) => {
		return queryOptions({
			queryKey: [barbershopsApi.baseKey, 'single-barbershop', id],
			queryFn: meta => barbershopsApi.getBarbershopById({ id }, meta),
		})
	},
}
