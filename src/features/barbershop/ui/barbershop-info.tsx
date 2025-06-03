import { Badge } from '@/shared/ui/kit/badge'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/kit/card'
import { PhoneIcon } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useBarbershop } from '../model/use-barbershop'

export function BarbershopInfo() {
	const { shopId } = useParams()
	const { data } = useBarbershop(Number(shopId))

	return (
		<div className='flex flex-col gap-4'>
			<Card>
				<CardHeader>
					<CardTitle className='text-3xl font-bold'>{data?.name}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='font-medium'>{data?.address}</p>
					<p className='text-slate-500'>{data?.description}</p>
				</CardContent>
				<CardFooter className='flex items-center gap-2'>
					<PhoneIcon />
					{data?.phone}
				</CardFooter>
			</Card>

			<Card className='w-full max-w-md shadow-md rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-lg font-semibold'>График работы</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='flex flex-wrap gap-2 mb-4'>
						{data?.workDays.map(day => (
							<Badge
								key={day}
								variant={'secondary'}
								className='text-sm px-3 py-1'
							>
								{day}
							</Badge>
						))}
					</div>
					<div className='text-sm text-muted-foreground'>
						Время:{' '}
						<span className='font-medium text-black'>{data?.timeFrom}</span> -
						<span className='font-medium text-black'>{data?.timeTo}</span>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
