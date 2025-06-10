import { useState } from 'react'
import type { UsersSortOptions } from '../ui/users-sort'

export type UserFilters = {
	search: string
	sort: UsersSortOptions
}

export function useUsersFilter() {
	const [search, setSearch] = useState('')
	const [sort, setSort] = useState<UsersSortOptions>('email')

	return {
		search,
		setSearch,
		sort,
		setSort,
	}
}
