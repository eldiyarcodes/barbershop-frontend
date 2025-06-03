import { $mainApi } from '@/shared/api/api-instance'
import type { AuthData } from './types'

export const authApi = {
	login: async (reqData: AuthData) => {
		const { data } = await $mainApi.post('auth/sign-in', reqData)
		return data
	},

	register: async (reqData: AuthData) => {
		const { data } = await $mainApi.post('auth/sign-up', reqData)
		return data
	},
}