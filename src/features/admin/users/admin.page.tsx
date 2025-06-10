import { useDebouncedValue } from '@/shared/lib/react'
import { Button } from '@/shared/ui/kit/button'
import { DropdownMenuItem } from '@/shared/ui/kit/dropdown-menu'
import { PlusIcon } from 'lucide-react'
import {
	AdminLayout,
	AdminLayoutFilters,
	AdminLayoutHeader,
} from '../admin-layout'
import { Sidebar } from '../sidebar'
import { useUsersFilter } from './model/use-users-filters'
import { useUsersList } from './model/use-users-list'
import { UserItem } from './ui/user-item'
import { UsersSearch } from './ui/users-search'
import { UsersSort } from './ui/users-sort'

function AdminPage() {
	const usersFilter = useUsersFilter()
	const usersListQuery = useUsersList({
		search: useDebouncedValue(usersFilter.search, 300),
		sort: usersFilter.sort,
	})

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Пользователи'
					description='Здесь вы можете управлять всеми пользователями'
					actions={
						<Button variant={'secondary'} className='cursor-pointer'>
							<PlusIcon />
							Добавить
						</Button>
					}
				/>
			}
			filters={
				<AdminLayoutFilters
					sort={
						<UsersSort
							value={usersFilter.sort}
							onChange={usersFilter.setSort}
						/>
					}
					filters={
						<UsersSearch
							value={usersFilter.search}
							onChange={usersFilter.setSearch}
						/>
					}
				/>
			}
		>
			<div className='flex flex-col gap-4'>
				{usersListQuery.isLoading ? (
					<h1>LOADING...</h1>
				) : (
					usersListQuery.users?.map(user => (
						<UserItem
							key={user.id}
							user={user}
							menuActions={
								<>
									<DropdownMenuItem onClick={() => alert('Edit')}>
										Редактировать
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => alert('Delete')}>
										Удалить
									</DropdownMenuItem>
								</>
							}
						/>
					))
				)}
			</div>
		</AdminLayout>
	)
}

export const Component = AdminPage
