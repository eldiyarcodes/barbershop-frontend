import { Button } from '@/shared/ui/kit/button'
import { useParams } from 'react-router-dom'
import { AdminLayout, AdminLayoutHeader } from '../admin-layout'
import { Sidebar } from '../sidebar'
import { useDeleteMaster } from './model/use-delete-master'
import { EditMasterForm } from './ui/edit-master-form'

function AdminEditMasterPage() {
	const { masterId } = useParams()

	const deleteMaster = useDeleteMaster()

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Редактирование мастера'
					description='Здесь вы можете редактировать, удалить мастера'
					actions={
						<Button
							variant={'destructive'}
							className='cursor-pointer'
							onClick={() => deleteMaster.handleDelete(Number(masterId))}
							disabled={deleteMaster.getIsPending(Number(masterId))}
						>
							Удалить
						</Button>
					}
				/>
			}
		>
			<div>
				<EditMasterForm />
			</div>
		</AdminLayout>
	)
}

export const Component = AdminEditMasterPage
