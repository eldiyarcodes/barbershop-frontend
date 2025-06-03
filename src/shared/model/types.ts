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

export type WorkDays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
