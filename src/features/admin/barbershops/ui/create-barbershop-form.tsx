import type { WorkDays } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'
import { Textarea } from '@/shared/ui/kit/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { barbershopSchema } from '../lib/schemas'
import { useCreateBarbershop } from '../model/use-create-barbershop'

export function CreateBarbershopForm() {
	const form = useForm({
		resolver: zodResolver(barbershopSchema),
		defaultValues: {
			name: '',
			address: '',
			phone: '',
			description: '',
			workDays: [],
			timeFrom: '',
			timeTo: '',
		},
	})

	const createBarbershop = useCreateBarbershop()

	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-4 w-[500px]'
				onSubmit={form.handleSubmit(createBarbershop.handleCreate)}
			>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Названия</FormLabel>
							<FormControl>
								<Input placeholder='Gentlemen Club' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='address'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Адрес</FormLabel>
							<FormControl>
								<Input placeholder='ул. Токтогула 165' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='workDays'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Рабочие дни</FormLabel>
							<FormControl>
								<div className='flex flex-wrap gap-4 p-4 border rounded-md bg-gray-50'>
									{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
										day => (
											<label
												key={day}
												className='flex items-center gap-2 text-sm text-gray-700'
											>
												<input
													type='checkbox'
													className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
													checked={field.value.includes(day as WorkDays)}
													onChange={e => {
														const updatedValue = e.target.checked
															? [...field.value, day]
															: field.value.filter(d => d !== day)
														field.onChange(updatedValue)
													}}
												/>
												{day}
											</label>
										)
									)}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Телефон</FormLabel>
							<FormControl>
								<Input placeholder='+996XXXXXXXXX' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Описание</FormLabel>
							<FormControl>
								<Textarea placeholder='Лучший барбершоп в городе' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='timeFrom'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Начало рабочего дня</FormLabel>
							<FormControl>
								<Input type='time' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='timeTo'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Конец рабочего дня</FormLabel>
							<FormControl>
								<Input type='time' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button variant={'default'} type='submit'>
					Создать
				</Button>
			</form>
		</Form>
	)
}
