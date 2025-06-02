import { Card } from '@/shared/ui/kit/card'

export function BarbershopList() {
	return (
		<>
			<h3 className='my-4'>Barbershops</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{[1, 2, 3, 4, 5].map(item => (
					<Card key={item} className='p-4'>
						Barbershop {item}
					</Card>
				))}
			</div>
		</>
	)
}
