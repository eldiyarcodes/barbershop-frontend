import { z } from 'zod'

export const masterSchema = z.object({
	fullName: z
		.string({ required_error: 'ФИО мастера' })
		.min(1, 'ФИО не может быть пустым'),
	specialization: z
		.string({ required_error: 'Поле обязателен' })
		.min(1, 'Поле обязательно к заполнению'),
	barbershopId: z.number({ required_error: 'Выберите барбершоп' }),
	photoUrl: z
		.string({ required_error: 'Вставьте ссылку на изображение' })
		.min(1, 'Вставьте ссылку на изображение'),
})
