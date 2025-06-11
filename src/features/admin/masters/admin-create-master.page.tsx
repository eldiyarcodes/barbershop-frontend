import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'
import { CreateMasterForm } from './ui/create-master-form'

function AdminCreateMasterPage() {
	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Создание нового мастера'
					description='Здесь вы можете создать нового мастера'
				/>
			}
		>
			<div>
				<CreateMasterForm />
			</div>
		</AdminLayout>
	)
}

export const Component = AdminCreateMasterPage
