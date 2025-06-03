import type { Barbershop, Master } from '@/shared/model/types'

export type BarbershopResponse = {
	status: string
	data: Barbershop
}

export type MastersReponse = {
	status: 'ok'
	data: Master[]
}
