import type { Barbershop } from '@/shared/model/types'

export type BarbershopListResponse = {
	status: string
	data: Barbershop[]
}
