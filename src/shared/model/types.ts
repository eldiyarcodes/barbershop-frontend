export type Barbershop = {
	id: number
	name: string
	address: string
	phone: string
	description: string
	workDays: WorkDays[]
	timeFrom: string
	timeTo: string
}

export type Appointment = {
	id: number
	masterId: number
	barbershopId: number
	userId: number
	date: string
	startTime: string
	endTime: string
	status: string
	name: string
	phone: string
}

export type Schedules = {
	id: number
	masterId: number
	dayOfWeek: WorkDays
	startTime: string
	endTime: string
}

export type Master = {
	id: number
	fullName: string
	specialization: string
	barbershopId: number
	photoUrl: string
}

export type User = {
	id: number
	email: string
	password: string
	role: UserRole
}

export type UserRole = 'ADMIN' | 'USER'

export type WorkDays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
