import { Input } from '@/shared/ui/kit/input'

export function Search({
	value,
	onChange,
}: {
	value: string
	onChange: (value: string) => void
}) {
	return (
		<Input
			id='search'
			placeholder='Поиск'
			value={value}
			onChange={e => onChange(e.target.value)}
			className='w-full md:flex-1 px-4 py-3'
		/>
	)
}
