import { useDebouncedValue } from '@/shared/lib/react'
import { DropdownMenuItem } from '@/shared/ui/kit/dropdown-menu'
import {
	AdminLayout,
	AdminLayoutFilters,
	AdminLayoutHeader,
} from '../admin-layout'
import { Sidebar } from '../sidebar'
import { useAppointmentsList } from './model/use-appointment-list'
import { useAppointmentsFilter } from './model/use-appointments-filters'
import { useDeleteAppointment } from './model/use-delete-appointment'
import { AppointmentItem } from './ui/appointment-item'
import { AppointmentsSearch } from './ui/appointment-search'

function AdminAppointmentsPage() {
	const appointmentsFilters = useAppointmentsFilter()
	const deleteAppointment = useDeleteAppointment()
	const appointmentsListQuery = useAppointmentsList({
		search: useDebouncedValue(appointmentsFilters.search, 300),
	})

	return (
		<AdminLayout
			sidebar={<Sidebar />}
			header={
				<AdminLayoutHeader
					title='Записи'
					description='Здесь вы можете управлять всеми записями'
				/>
			}
			filters={
				<AdminLayoutFilters
					filters={
						<AppointmentsSearch
							value={appointmentsFilters.search}
							onChange={appointmentsFilters.setSearch}
						/>
					}
					sort={<div>Sort</div>}
				/>
			}
		>
			<div>
				{appointmentsListQuery.data?.map(appointment => (
					<AppointmentItem
						key={appointment.id}
						appointment={appointment}
						menuActions={
							<>
								<DropdownMenuItem onClick={() => alert('По')}>
									Подробнее
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => deleteAppointment.handleDelete(appointment.id)}
								>
									Удалить
								</DropdownMenuItem>
							</>
						}
					/>
				))}
			</div>
		</AdminLayout>
	)
}

export const Component = AdminAppointmentsPage
