import { Button } from '@/shared/ui/kit/button'
import { PlusIcon } from 'lucide-react'
import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'

function AdminAppointmentsPage() {
	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Записи'
					description='Здесь вы можете управлять всеми записями'
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

export const Component = AdminAppointmentsPage
