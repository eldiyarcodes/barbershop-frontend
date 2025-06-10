import { z } from 'zod'

const userSchema = z.object({
	email: z
		.string({ required_error: 'Email обязателен' })
		.email('Неверный email')
		.optional(),
	password: z
		.string({ required_error: 'Пароль обязателен' })
		.min(5, 'Пароль должен быть не менее 5 символов')
		.optional(),
	role: z.enum(['ADMIN', 'USER']).optional(),
})

export const userSchemas = {
	edit: userSchema,
	create: userSchema,
}
