import { useDebouncedValue } from '@/shared/lib/react'
import { ROUTES } from '@/shared/model/routes'
import { Button } from '@/shared/ui/kit/button'
import { PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	AdminLayout,
	AdminLayoutFilters,
	AdminLayoutHeader,
} from '../admin-layout'
import { Sidebar } from '../sidebar'
import { MastersItem } from './model/masters-item'
import { useMastersList } from './model/use-masters-list'
import { MastersSearch } from './ui/masters-search'

function AdminMastersPage() {
	const [search, setSearch] = useState('')

	const navigate = useNavigate()

	const mastersQuery = useMastersList({
		search: useDebouncedValue(search, 300),
	})

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Мастера'
					description='Здесь вы можете управлять всеми мастерами'
					actions={
						<Button
							variant={'secondary'}
							className='cursor-pointer'
							onClick={() => navigate(ROUTES.ADMIN_CREATE_MASTER)}
						>
							<PlusIcon />
							Добавить
						</Button>
					}
				/>
			}
			filters={
				<AdminLayoutFilters
					filters={<MastersSearch value={search} onChange={setSearch} />}
				/>
			}
		>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{mastersQuery.isLoading ? (
					<h1>LOADING...</h1>
				) : (
					mastersQuery.data?.map(master => (
						<MastersItem key={master.id} master={master} />
					))
				)}
			</div>
		</AdminLayout>
	)
}

export const Component = AdminMastersPage
