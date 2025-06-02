import { Input } from '@/shared/ui/kit/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/kit/select'

export function SearchFilterPanel() {
	return (
		<div className='w-full flex flex-col md:flex-row items-center justify-between gap-3 p-4'>
			<Input
				id='search'
				placeholder='Введите название барбершопа'
				value={''}
				onChange={() => {}}
				className='w-full md:flex-1'
			/>
			<div className='w-full md:flex-1'>
				<Select value={''} onValueChange={() => {}}>
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
			</div>
		</div>
	)
}
