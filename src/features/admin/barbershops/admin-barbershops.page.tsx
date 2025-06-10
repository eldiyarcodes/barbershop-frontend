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
import { useBarbershopsList } from './model/use-barbershops-list'
import { BarbershopItem } from './ui/barbershop-item'
import { BarbershopsSearch } from './ui/barbershop-search'

function AdminBarbershopsPage() {
	const [search, setSearch] = useState('')

	const navigate = useNavigate()

	const barbershopsQuery = useBarbershopsList({
		search: useDebouncedValue(search, 300),
	})

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Барбершопы'
					description='Здесь вы можете управлять всеми барбершопами'
					actions={
						<Button
							variant={'secondary'}
							className='cursor-pointer'
							onClick={() => navigate(ROUTES.ADMIN_CREATE_BARBERSHOP)}
						>
							<PlusIcon />
							Добавить
						</Button>
					}
				/>
			}
			filters={
				<AdminLayoutFilters
					filters={<BarbershopsSearch value={search} onChange={setSearch} />}
				/>
			}
		>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{barbershopsQuery.isLoading ? (
					<h1>LOADING...</h1>
				) : (
					barbershopsQuery.data?.map(barbershop => (
						<BarbershopItem key={barbershop.id} barbershop={barbershop} />
					))
				)}
			</div>
		</AdminLayout>
	)
}

export const Component = AdminBarbershopsPage
