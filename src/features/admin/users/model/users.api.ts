import { $authApi } from '@/shared/api/api-instance'
import type { User } from '@/shared/model/types'
import { queryOptions } from '@tanstack/react-query'
import type { UsersSortOptions } from '../ui/users-sort'

type UsersListDto = {
	status: string
	data: User[]
}

type UserDto = {
	status: string
	data: User
}

export const usersApi = {
	baseKey: 'admin_users',

	getAllUsers: async (
		{ search, sort }: { search: string; sort: UsersSortOptions },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<UsersListDto>('users', {
			params: {
				sort,
				search,
			},
			signal,
		})

		return data
	},

	getUserById: async (
		{ id }: { id: number },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<UserDto>(`users/${id}`, {
			signal,
		})

		return data
	},

	createUser: async () => {},

	deleteUser: async (id: number) => {
		await $authApi.delete('')
	},

	getUsersQueryOptions: (search: string, sort: UsersSortOptions) => {
		return queryOptions({
			queryKey: [usersApi.baseKey, 'users', search, sort],
			queryFn: meta => usersApi.getAllUsers({ search, sort }, meta),
		})
	},

	getUserQueryOptions: (id: number) => {
		return queryOptions({
			queryKey: [usersApi.baseKey, 'user', id],
			queryFn: meta => usersApi.getUserById({ id }, meta),
		})
	},
}
