import { useBarbershopsList } from '@/features/admin/barbershops'
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/kit/select'
import { Textarea } from '@/shared/ui/kit/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { masterSchema } from '../lib/schemas'
import { useCreateMaster } from '../model/use-create-master'

export function CreateMasterForm() {
	const form = useForm({
		resolver: zodResolver(masterSchema),
	})

	const createMaster = useCreateMaster()
	const barbershopListQuery = useBarbershopsList({ search: '' })

	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-4 w-[500px]'
				onSubmit={form.handleSubmit(createMaster.handleCreate)}
			>
				<FormField
					control={form.control}
					name='fullName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>ФИО</FormLabel>
							<FormControl>
								<Input placeholder='Введите ФИО мастера' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='specialization'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Специализация</FormLabel>
							<FormControl>
								<Textarea placeholder='Специализация' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='barbershopId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Выберите барбершопа</FormLabel>
							<FormControl>
								<Select
									value={String(field.value)}
									onValueChange={value => field.onChange(Number(value))}
								>
									<SelectTrigger id='barbershop' className='w-full'>
										<SelectValue placeholder='Выберите барбершоп' />
									</SelectTrigger>
									<SelectContent>
										{barbershopListQuery.data?.map(barbershop => (
											<SelectItem
												key={barbershop.id}
												value={String(barbershop.id)}
											>
												{barbershop.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='photoUrl'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Изображение</FormLabel>
							<FormControl>
								<Input placeholder='https://...' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					variant={'default'}
					type='submit'
					disabled={createMaster.isPending}
				>
					Создать
				</Button>
			</form>
		</Form>
	)
}
