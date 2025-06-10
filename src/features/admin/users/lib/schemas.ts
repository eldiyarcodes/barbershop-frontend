import { z } from 'zod'

export const createUserSchema = z
	.object({
		email: z
			.string({ required_error: 'Email обязателен' })
			.email('Неверный email'),
		role: z.enum(['ADMIN', 'USER']).optional(),
		password: z
			.string({ required_error: 'Пароль обязателен' })
			.min(5, 'Пароль должен быть не менее 5 символов'),
		confirmPassword: z.string().optional(),
	})
	.refine(data => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Пароли не совпадают',
	})
