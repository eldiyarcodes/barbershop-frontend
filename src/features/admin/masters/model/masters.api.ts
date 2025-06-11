import { $authApi } from '@/shared/api/api-instance'
import type { Master } from '@/shared/model/types'
import { queryOptions } from '@tanstack/react-query'
import type { CreateMasterDto } from './dto'

type MastersListDto = {
	status: string
	data: Master[]
}

type MasterOkResponse = {
	status: string
	data: Master
}

export const mastersApi = {
	baseKey: 'admin-masters',

	getAllMasters: async (
		{ search }: { search: string },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<MastersListDto>('master', {
			params: {
				search,
			},
			signal,
		})

		return data
	},

	createMaster: async (master: CreateMasterDto) => {
		const { data } = await $authApi.post<MasterOkResponse>(
			'master/create',
			master
		)

		return data
	},

	editMaster: async ({
		id,
		master,
	}: {
		id: number
		master: CreateMasterDto
	}) => {
		const { data } = await $authApi.patch<MasterOkResponse>(
			`master/${id}`,
			master
		)

		return data
	},

	getMasterById: async (
		{ id }: { id: number },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<MasterOkResponse>(`master/${id}`, {
			signal,
		})
		return data
	},

	deleteMaster: async (id: number) => {
		await $authApi.delete(`master/${id}`)
	},

	getMastersQueryOptions: (search: string) => {
		return queryOptions({
			queryKey: [mastersApi.baseKey, 'masters-list', search],
			queryFn: meta => mastersApi.getAllMasters({ search }, meta),
		})
	},

	getMasterQueryOptions: (id: number) => {
		return queryOptions({
			queryKey: [mastersApi.baseKey, 'masters', id],
			queryFn: meta => mastersApi.getMasterById({ id }, meta),
		})
	},
}
