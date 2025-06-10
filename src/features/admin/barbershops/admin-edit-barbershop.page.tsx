import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'

function AdminEditBarbershopPage() {
	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title={'Редактирование барбершопа'}
					description='Здесь вы можете редактировать, удалять барбершопа'
				/>
			}
		>
			<div className='flex justify-center'>Form</div>
		</AdminLayout>
	)
}

export const Component = AdminEditBarbershopPage
