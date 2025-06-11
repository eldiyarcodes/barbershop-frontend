import 'react-router-dom'

export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	BARBERSHOPS: '/barbershops',
	BARBERSHOP: '/barbershop/:shopId',
	APPOINTMENT: '/appointment/:barbershopId',

	ADMIN: '/admin',
	ADMIN_CREATE_USER: '/admin/user/create',
	ADMIN_BARBERSHOPS: '/admin/barbershops',
	ADMIN_BARBERSHOP: '/admin/barbershop/:barbershopId',
	ADMIN_CREATE_BARBERSHOP: '/admin/barbershop/create',

	ADMIN_MASTERS: '/admin/masters',
	ADMIN_MASTER: '/admin/master/:masterId',
	ADMIN_CREATE_MASTER: '/admin/master/create',

	ADMIN_APPOINTMENTS: '/admin/appointments',
	ADMIN_APPOINTMENT: '/admin/appointment/:appointmentId',
} as const

export type PathParams = {
	[ROUTES.BARBERSHOP]: {
		shopId: string
	}
	[ROUTES.APPOINTMENT]: {
		barbershopId: string
	}
	[ROUTES.ADMIN_MASTER]: {
		masterId: string
	}
	[ROUTES.ADMIN_BARBERSHOP]: {
		barbershopId: string
	}
	[ROUTES.ADMIN_APPOINTMENT]: {
		appointmentId: string
	}
}

declare module 'react-router-dom' {
	interface Register {
		params: PathParams
	}
}
