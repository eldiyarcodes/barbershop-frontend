import { $authApi } from '@/shared/api/api-instance'
import type { Appointment } from '@/shared/model/types'
import { queryOptions } from '@tanstack/react-query'

type AppointmentListOkResponse = {
	status: string
	data: Appointment[]
}

type AppointmentOkResponse = {
	status: string
	data: Appointment
}

export const appointmentsApi = {
	baseKey: 'admin-appointments',

	getAllAppointments: async (
		{ search }: { search: string },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<AppointmentListOkResponse>(
			'appointments',
			{
				params: {
					search,
				},
				signal,
			}
		)

		return data
	},

	getAppointmentById: async (
		{ id }: { id: number },
		{ signal }: { signal: AbortSignal }
	) => {
		const { data } = await $authApi.get<AppointmentOkResponse>(
			`appointment/${id}`,
			{
				signal,
			}
		)
		return data
	},

	deleteAppointment: async (id: number) => {
		await $authApi.delete(`appointments/${id}`)
	},

	getAppointmentsQueryOptions: ({ search }: { search: string }) => {
		return queryOptions({
			queryKey: [appointmentsApi.baseKey, 'appointments-list', search],
			queryFn: meta => appointmentsApi.getAllAppointments({ search }, meta),
		})
	},

	getAppointmentQueryOptions: (id: number) => {
		return queryOptions({
			queryKey: [appointmentsApi.baseKey, 'appointment', id],
			queryFn: meta => appointmentsApi.getAppointmentById({ id }, meta),
		})
	},
}
