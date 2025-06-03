export type Barbershop = {
	id: number
	name: string
	address: string
	phone: string
	description: string
	workDays: BarbershopWorkDays[]
	timeFrom: string
	timeTo: string
}

export type BarbershopWorkDays =
	| 'Mon'
	| 'Tue'
	| 'Wed'
	| 'Thu'
	| 'Fri'
	| 'Sat'
	| 'Sun'

export type BarbershopListResponse = {
	status: string
	data: Barbershop[]
}