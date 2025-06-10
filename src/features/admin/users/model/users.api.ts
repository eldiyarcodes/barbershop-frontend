import { $authApi } from '@/shared/api/api-instance'
import type { User } from '@/shared/model/types'
import { queryOptions } from '@tanstack/react-query'
import type { UsersSortOptions } from '../ui/users-sort'

type UsersListDto = {
	status: string
	data: User[]
}

type CreateUserDto = {
	status: string
	data: User
}

export const usersApi = {
	baseKey: 'admin-users',

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

	createUser: async (user: { email: string; password: string }) => {
		const { data } = await $authApi.post<CreateUserDto>('users', user)

		return data.data
	},

	deleteUser: async (id: number) => {
		await $authApi.delete(`users/${id}`)
	},

	getUsersQueryOptions: (search: string, sort: UsersSortOptions) => {
		return queryOptions({
			queryKey: [usersApi.baseKey, 'users', search, sort],
			queryFn: meta => usersApi.getAllUsers({ search, sort }, meta),
		})
	},
}
