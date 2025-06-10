import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'
import { CreateBarbershopForm } from './ui/create-barbershop-form'

function AdminCreateBarbershopPage() {
	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title={'Создание барбершопа'}
					description='Здесь вы можете создать нового барбершопа'
				/>
			}
		>
			<div>
				<CreateBarbershopForm />
			</div>
		</AdminLayout>
	)
}

export const Component = AdminCreateBarbershopPage
