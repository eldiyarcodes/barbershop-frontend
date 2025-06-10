import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/kit/select'

export type UsersSortOptions =
	| 'createdAt'
	| 'updatedAt'
	| 'name'
	| 'lastOpenedAt'

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
				<SelectItem value='lastOpenedAt'>По дате открытия</SelectItem>
				<SelectItem value='createdAt'>По дате создания</SelectItem>
				<SelectItem value='updatedAt'>По дате обновления</SelectItem>
				<SelectItem value='name'>По имени</SelectItem>
			</SelectContent>
		</Select>
	)
}
