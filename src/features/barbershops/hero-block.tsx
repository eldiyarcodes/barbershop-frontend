import { Button } from '@/shared/ui/kit/button'
import { Card, CardDescription, CardTitle } from '@/shared/ui/kit/card'

export function HeroBock() {
	return (
		<Card className='w-full flex flex-col-reverse md:flex-row items-center p-4 border-none shadow-none'>
			<div className='flex-1 flex flex-col gap-2 items-center'>
				<CardTitle>Найди своего барбера</CardTitle>
				<CardDescription className='text-center'>
					Быстрая и удобная запись в ближайший барбершоп	
				</CardDescription>
				<Button variant={'default'}>Выбрать барбершоп</Button>
			</div>
			<div className='flex-1'>
				<img
					className='h-[300px] w-full rounded-lg'
					src='https://insights.ibx.com/wp-content/uploads/2023/06/kym-barbershop.jpg'
					alt='hero'
				/>
			</div>
		</Card>
	)
}
