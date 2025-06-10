import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { UsersSortOptions } from '../ui/users-sort'
import { usersApi } from './users.api'

export function useUsersList({
	search,
	sort,
}: {
	search?: string
	sort?: UsersSortOptions
}) {
	const usersQuery = useQuery({
		...usersApi.getUsersQueryOptions(String(search), sort as UsersSortOptions),
		placeholderData: keepPreviousData,
	})

	const errorMessage = usersQuery.error
		? usersQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		users: usersQuery.data?.data,
		isLoading: usersQuery.isLoading,
		errorMessage,
	}
}
