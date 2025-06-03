import type { Master } from '@/shared/model/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	name: z.string().min(1, 'Введите имя'),
	phone: z.string().min(1, 'Введите номер телефона'),
})

type AppointmentFormSchema = z.infer<typeof formSchema>

export function useAppointmentForm({
	master,
	onSuccess,
}: {
	master: Master
	onSuccess: () => void
}) {
	const form = useForm<AppointmentFormSchema>({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			phone: '',
		},
	})

	const [date, setDate] = useState<Date | undefined>()
	const [time, setTime] = useState('')

	const onSubmit = (values: AppointmentFormSchema) => {
		if (!date || !time) return

		console.log({
			masterId: master.id,
			date,
			time,
			...values,
		})

		onSuccess()
	}

	return {
		form,
		date,
		time,
		setDate,
		setTime,
		handleSubmit: form.handleSubmit(onSubmit),
	}
}
