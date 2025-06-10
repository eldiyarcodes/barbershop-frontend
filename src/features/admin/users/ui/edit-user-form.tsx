import type { User, UserRole } from '@/shared/model/types'
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
import { userSchemas } from '../lib/schemas'

export function EditUserForm({ user }: { user: User }) {
	const form = useForm({
		resolver: zodResolver(userSchemas.edit),
		defaultValues: {
			email: user.email || '',
			password: user.password || '',
			role: user.role as UserRole,
		},
	})

	return (
		<Form {...form}>
			<form className='max-w-[500px] flex flex-col gap-4'>
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
			</form>
		</Form>
	)
}
