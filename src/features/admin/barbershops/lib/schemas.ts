import { z } from 'zod'

export const barbershopSchema = z.object({
	name: z
		.string({ required_error: 'Название обязательно' })
		.min(1, 'Название не может быть пустым'),
	address: z
		.string({ required_error: 'Адрес обязателен' })
		.min(1, 'Адрес не может быть пустым'),
	phone: z
		.string({ required_error: 'Телефон обязателен' })
		.regex(
			/^\+996\d{9}$/,
			'Телефон должен начинаться с +996 и содержать 9 цифр после кода'
		),
	description: z
		.string({ required_error: 'Опишите барбершоп' })
		.min(1, 'Описание не может быть пустым'),
	workDays: z
		.array(z.enum(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']), {
			required_error: 'Рабочие дни обязательны',
		})
		.min(1, 'Выберите хотя бы один рабочий день'),
	timeFrom: z
		.string({ required_error: 'Поле "Время начало" обязательно' })
		.min(1, 'Поле "Время начало" не может быть пустым'),
	timeTo: z
		.string({ required_error: 'Поле "Время окончания" обязательно' })
		.min(1, 'Поле "Время окончания" не может быть пустым'),
})
