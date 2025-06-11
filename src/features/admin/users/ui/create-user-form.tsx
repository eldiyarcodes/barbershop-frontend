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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createUserSchema } from '../lib/schemas'
import { useCreateUser } from '../model/use-create-user'

export function CreateUserForm() {
	const form = useForm({
		resolver: zodResolver(createUserSchema),
	})

	const createUser = useCreateUser()

	const onSubmit = form.handleSubmit(data => {
		createUser.handleCreate({
			email: String(data.email),
			password: String(data.password),
		})
	})

	return (
		<Form {...form}>
			<form className='w-[500px] flex flex-col gap-4 mt-6' onSubmit={onSubmit}>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='example@icloud.com' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='role'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Роль</FormLabel>
							<FormControl>
								<Select value={field.value} onValueChange={field.onChange}>
									<SelectTrigger id='role' className='w-full'>
										<SelectValue placeholder='Выберите роль' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='ADMIN'>Админ</SelectItem>
										<SelectItem value='USER'>Пользователь</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input placeholder='*****' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Подтвердите пароль</FormLabel>
							<FormControl>
								<Input placeholder='*****' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					className='cursor-pointer'
					disabled={createUser.isPending}
				>
					Создать
				</Button>
			</form>
		</Form>
	)
}
