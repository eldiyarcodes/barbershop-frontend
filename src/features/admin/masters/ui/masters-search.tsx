import { Input } from '@/shared/ui/kit/input'

export function MastersSearch({
	value,
	onChange,
}: {
	value: string
	onChange: (value: string) => void
}) {
	return (
		<Input
			id='search'
			placeholder='Поиск мастера'
			value={value}
			onChange={e => onChange(e.target.value)}
			className='w-full'
		/>
	)
}
