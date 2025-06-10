import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/kit/select'

export type UsersSortOptions = 'id' | 'email'

export function UsersSort({
	value,
	onChange,
}: {
	value: UsersSortOptions
	onChange: (value: UsersSortOptions) => void
}) {
	return (
		<Select
			value={value}
			onValueChange={value => onChange(value as UsersSortOptions)}
		>
			<SelectTrigger id='sort' className='w-full'>
				<SelectValue placeholder='Сортировка' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='email'>По email</SelectItem>
				<SelectItem value='id'>По ID</SelectItem>
			</SelectContent>
		</Select>
	)
}
