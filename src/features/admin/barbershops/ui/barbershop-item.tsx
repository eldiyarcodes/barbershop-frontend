import { ROUTES } from '@/shared/model/routes'
import type { Barbershop } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/kit/card'
import { href, Link } from 'react-router-dom'

export function BarbershopItem({ barbershop }: { barbershop: Barbershop }) {
	return (
		<Card className='py-5'>
			<CardHeader>
				<CardTitle>{barbershop.name}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{barbershop.description}</CardDescription>
				<CardDescription>
					{barbershop.timeFrom} - {barbershop.timeTo}
				</CardDescription>
			</CardContent>
			<CardFooter className='flex items-center justify-between'>
				<CardDescription>{barbershop.address}</CardDescription>
				<Button asChild variant={'link'} className='cursor-pointer'>
					<Link
						to={href(ROUTES.ADMIN_BARBERSHOP, {
							barbershopId: String(barbershop.id),
						})}
					>
						Редактировать
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
