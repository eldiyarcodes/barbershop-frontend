import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/ui/kit/carousel'
import { useParams } from 'react-router-dom'
import { useMasters } from '../model/use-masters'
import { MasterCard } from './master-card'

export function MastersList() {
	const { shopId } = useParams()
	const { masters } = useMasters(Number(shopId))

	return (
		<>
			<h3 className='text-3xl font-bold'>Наши мастера:</h3>
			{masters?.length === 0 ? (
				<h2 className='text-3xl text-slate-500 font-bold text-center'>
					Мастера отсутствуют
				</h2>
			) : (
				<Carousel
					opts={{
						align: 'start',
					}}
					className='w-full mb-10'
				>
					<CarouselContent>
						{masters?.map(master => (
							<CarouselItem
								key={master.id}
								className='basis-full md:basis-1/2 lg:basis-1/3'
							>
								<MasterCard key={master.id} master={master} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			)}
		</>
	)
}
