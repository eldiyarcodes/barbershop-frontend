import { Input } from '@/shared/ui/kit/input'

export function BarbershopsSearch({
	value,
	onChange,
}: {
	value: string
	onChange: (value: string) => void
}) {
	return (
		<Input
			id='search'
			placeholder='Поиск барбершопа'
			value={value}
			onChange={e => onChange(e.target.value)}
			className='w-full'
		/>
	)
}
