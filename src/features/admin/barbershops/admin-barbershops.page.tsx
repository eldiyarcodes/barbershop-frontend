import { Button } from '@/shared/ui/kit/button'
import { PlusIcon } from 'lucide-react'
import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'

function AdminBarbershopsPage() {
	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Барбершопы'
					description='Здесь вы можете управлять всеми барбершопами'
					actions={
						<Button variant={'secondary'} className='cursor-pointer'>
							<PlusIcon />
							Добавить
						</Button>
					}
				/>
			}
			filters={<div>Filters</div>}
		>
			<div>Content</div>
		</AdminLayout>
	)
}

export const Component = AdminBarbershopsPage
