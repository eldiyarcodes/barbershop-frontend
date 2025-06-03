import { BarbershopInfo } from './ui/barbershop-info'
import { MastersList } from './ui/masters-list'

function BarbershopPage() {
	return (
		<div className='flex flex-col gap-8 px-4'>
			<BarbershopInfo />
			<MastersList />
		</div>
	)
}

export const Component = BarbershopPage
