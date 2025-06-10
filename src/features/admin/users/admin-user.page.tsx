import type { User } from '@/shared/model/types'
import { useParams } from 'react-router-dom'
import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'
import { useUser } from './model/use-user'
import { EditUserForm } from './ui/edit-user-form'

function AdminUserPage() {
	const { userId } = useParams()

	const { user, isLoading } = useUser(Number(userId))

	if (isLoading) return <h1>LOADING...</h1>

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title={'Редактирование пользователя'}
					description='Здесь вы можете редактировать, удалять пользователя'
				/>
			}
		>
			<div>
				<EditUserForm user={user as User} />
			</div>
		</AdminLayout>
	)
}

export const Component = AdminUserPage
