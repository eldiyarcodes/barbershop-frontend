import 'react-router-dom'

export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	ADMIN: '/administration',
	BARBERSHOPS: '/barbershops',
	BARBERSHOP: '/barbershop/:shopId',
	APPOINTMENT: '/appointment/:barbershopId',
	APPOINTMENT_CONFIRMATION: '/appointment/confirmation/:appointmentId',
	APPOINTMENT_CANCEL: '/appointment/cancel',
} as const

export type PathParams = {
	[ROUTES.BARBERSHOP]: {
		shopId: string
	}
	[ROUTES.APPOINTMENT]: {
		barbershopId: string
	}
	[ROUTES.APPOINTMENT_CONFIRMATION]: {
		appointmentId: string
	}
}

declare module 'react-router-dom' {
	interface Register {
		params: PathParams
	}
}
