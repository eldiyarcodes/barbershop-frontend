import type { Master } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import { Calendar } from '@/shared/ui/kit/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'
import { Label } from '@/shared/ui/kit/label'
import { useAppointmentForm } from '../model/use-appointment-form'

const mockTimeSlots = ['10:00', '11:00', '12:00', '14:00', '16:00', '18:00']

export function AppointmentForm({
	master,
	onSuccess,
}: {
	master: Master
	onSuccess: () => void
}) {
	const { form, handleSubmit, date, time, setTime, setDate } =
		useAppointmentForm({ master, onSuccess })

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<Label>Выберите дату</Label>
					<Calendar
						mode='single'
						selected={date}
						onSelect={setDate}
						fromDate={new Date()}
						toDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
					/>
				</div>

				{date && (
					<div>
						<Label>Выберите время</Label>
						<div className='flex flex-wrap gap-2 mt-2'>
							{mockTimeSlots.map(slot => (
								<Button
									key={slot}
									type='button'
									variant={time === slot ? 'default' : 'outline'}
									onClick={() => setTime(slot)}
								>
									{slot}
								</Button>
							))}
						</div>
					</div>
				)}

				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя</FormLabel>
							<FormControl>
								<Input placeholder='Введите имя' {...field} />
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
								<Input placeholder='+7...' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					className='w-full'
					disabled={!date || !time || !form.formState.isValid}
				>
					Подтвердить запись
				</Button>
			</form>
		</Form>
	)
}
