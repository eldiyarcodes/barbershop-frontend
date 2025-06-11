import { useState } from 'react'

export type AppointmentsFilters = {
	search: string
	// sort: UsersSortOptions
}

export function useAppointmentsFilter() {
	const [search, setSearch] = useState('')
	// const [sort, setSort] = useState<UsersSortOptions>('email')

	return {
		search,
		setSearch,
		// sort,
		// setSort,
	}
}
