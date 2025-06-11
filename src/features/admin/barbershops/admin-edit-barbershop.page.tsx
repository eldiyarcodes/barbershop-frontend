import { Button } from '@/shared/ui/kit/button'
import { useParams } from 'react-router-dom'
import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'
import { useDeleteBarbershop } from './model/use-delete-barbershop'
import { EditBarbershopForm } from './ui/edit-barbershop-form'

function AdminEditBarbershopPage() {
	const { barbershopId } = useParams()
	const { handleDelete, getIsPending } = useDeleteBarbershop()

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title={'Редактирование барбершопа'}
					description='Здесь вы можете редактировать, удалять барбершопа'
					actions={
						<Button
							variant={'destructive'}
							className='cursor-pointer'
							onClick={() => handleDelete(Number(barbershopId))}
							disabled={getIsPending(Number(barbershopId))}
						>
							Удалить
						</Button>
					}
				/>
			}
		>
			<div>
				<EditBarbershopForm />
			</div>
		</AdminLayout>
	)
}

export const Component = AdminEditBarbershopPage
