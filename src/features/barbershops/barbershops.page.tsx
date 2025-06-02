import { BarbershopList } from './barbershop-list'
import { HeroBock } from './hero-block'
import { SearchFilterPanel } from './search-filter-panel'

function BarbershopsPage() {
	return (
		<div className='w-full flex flex-col px-4'>
			<HeroBock />
			<SearchFilterPanel />
			<BarbershopList />
		</div>
	)
}

export const Component = BarbershopsPage
