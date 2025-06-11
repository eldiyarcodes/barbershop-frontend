import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { mastersApi } from './masters.api'

export function useMastersList({ search }: { search: string }) {
	const mastersQuery = useQuery({
		...mastersApi.getMastersQueryOptions(search),
		placeholderData: keepPreviousData,
	})

	const errorMessage = mastersQuery.error
		? mastersQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		data: mastersQuery.data?.data,
		isLoading: mastersQuery.isLoading,
		errorMessage,
	}
}
