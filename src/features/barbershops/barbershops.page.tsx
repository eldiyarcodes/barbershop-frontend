import { BarbershopList } from './ui/barbershop-list'
import { HeroBock } from './ui/hero-block'

function BarbershopsPage() {
	return (
		<div className='w-full flex flex-col gap-8 px-4'>
			<HeroBock />
			<BarbershopList />
		</div>
	)
}

export const Component = BarbershopsPage
