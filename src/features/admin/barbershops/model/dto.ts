import type { WorkDays } from '@/shared/model/types'

export type CreateBarbershopDto = {
	name: string
	address: string
	phone: string
	description: string
	workDays: WorkDays[]
	timeFrom: string
	timeTo: string
}
