import { ROUTES } from '@/shared/model/routes'
import type { Master } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/shared/ui/kit/card'
import { href, Link } from 'react-router-dom'

export function MastersItem({ master }: { master: Master }) {
	return (
		<Card className='p-4 overflow-hidden shadow-md hover:shadow-lg transition'>
			<div>
				<img
					src={
						master.photoUrl ??
						'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
					}
					alt={master.fullName}
					className='h-48 w-full object-cover rounded-lg'
				/>
			</div>
			<CardContent className='p-4 space-y-2'>
				<CardTitle className='text-lg font-semibold'>
					{master.fullName}
				</CardTitle>
				<CardDescription className='text-sm text-muted-foreground'>
					{master.specialization}
				</CardDescription>
			</CardContent>
			<CardFooter className='flex justify-end'>
				<Button asChild variant={'link'} className='cursor-pointer'>
					<Link
						to={href(ROUTES.ADMIN_MASTER, {
							masterId: String(master.id),
						})}
					>
						Редактировать
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
