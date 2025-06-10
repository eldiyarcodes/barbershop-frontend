import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { usersApi } from './users.api'

export function useUser(id: number) {
	const userQuery = useQuery({
		...usersApi.getUserQueryOptions(id),
		placeholderData: keepPreviousData,
	})

	const errorMessage = userQuery.error
		? userQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		user: userQuery.data?.data,
		isLoading: userQuery.isLoading,
		errorMessage,
	}
}
