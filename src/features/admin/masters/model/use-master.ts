import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { mastersApi } from './masters.api'

export function useMaster({ id }: { id: number }) {
	const masterQuery = useQuery({
		...mastersApi.getMasterQueryOptions(id),
		placeholderData: keepPreviousData,
	})

	const errorMessage = masterQuery.error
		? masterQuery.error.message
		: 'Ошибка при загрузке данных'

	return {
		data: masterQuery.data?.data,
		isLoading: masterQuery.isLoading,
		errorMessage,
	}
}
