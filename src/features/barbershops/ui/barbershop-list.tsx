import { useDebouncedValue } from '@/shared/lib/react'
import { ROUTES } from '@/shared/model/routes'
import { Button } from '@/shared/ui/kit/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/kit/card'
import { useState } from 'react'
import { href, Link } from 'react-router-dom'
import { useBarbershopList } from '../model/use-barbershop-list'
import { Search } from './search'

export function BarbershopList() {
	const [search, setSearch] = useState('')

	const barbershopsQuery = useBarbershopList({
		search: useDebouncedValue(search, 300),
	})

	return (
		<div className='px-4'>
			<div className='w-full flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-10 mb-8'>
				<h2 className='text-xl font-bold'>Barbershops</h2>
				<Search value={search} onChange={setSearch} />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
				{barbershopsQuery.data?.map((item, idx) => (
					<Card key={idx} className='py-5'>
						<CardHeader>
							<CardTitle>{item.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>{item.description}</CardDescription>
							<CardDescription>
								{item.timeFrom} - {item.timeTo}
							</CardDescription>
						</CardContent>
						<CardFooter className='flex items-center justify-between'>
							<CardDescription>{item.address}</CardDescription>
							<Button asChild variant={'link'} className='cursor-pointer'>
								<Link to={href(ROUTES.BARBERSHOP, { shopId: String(item.id) })}>
									Подробнее
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
