import type { Master } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/shared/ui/kit/card'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/kit/dialog'
import { AppointmentForm } from './appointment-form'

export function MasterCard({ master }: { master: Master }) {
	return (
		<Dialog>
			<Card className='p-4 overflow-hidden shadow-md hover:shadow-lg transition'>
				<div>
					<img
						src={master.photoUrl}
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
				<DialogTrigger asChild>
					<Button variant={'outline'}>Записаться</Button>
				</DialogTrigger>
			</Card>

			<DialogContent className='max-w-lg'>
				<DialogHeader>
					<DialogTitle>Запись к мастеру</DialogTitle>
				</DialogHeader>
				<AppointmentForm master={master} onSuccess={() => {}} />
			</DialogContent>
		</Dialog>
	)
}
