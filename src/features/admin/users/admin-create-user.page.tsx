import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'
import { CreateUserForm } from './ui/create-user-form'

function AdminCreateUserPage() {
	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title={'Создание нового пользователя'}
					description='Здесь вы можете создать нового пользователя'
				/>
			}
		>
			<div>
				<CreateUserForm />
			</div>
		</AdminLayout>
	)
}

export const Component = AdminCreateUserPage
