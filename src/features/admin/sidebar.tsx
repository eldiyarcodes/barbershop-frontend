import { cn } from '@/shared/lib/tailwind-merge'
import { ROUTES } from '@/shared/model/routes'
import { Button } from '@/shared/ui/kit/button'
import { StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type SideBarItem = {
	id: string
	label: string
	link: string
	icon: React.ReactNode
}

const sideBarItems: SideBarItem[] = [
	{
		id: crypto.randomUUID(),
		label: 'Пользователи',
		link: ROUTES.ADMIN,
		icon: <StarIcon className='mr-2 w-4 h-4' />,
	},
	{
		id: crypto.randomUUID(),
		label: 'Барбершопы',
		link: ROUTES.ADMIN_BARBERSHOPS,
		icon: <StarIcon className='mr-2 w-4 h-4' />,
	},
	{
		id: crypto.randomUUID(),
		label: 'Мастера',
		link: ROUTES.ADMIN_MASTERS,
		icon: <StarIcon className='mr-2 w-4 h-4' />,
	},
	{
		id: crypto.randomUUID(),
		label: 'Записи',
		link: ROUTES.ADMIN_APPOINTMENTS,
		icon: <StarIcon className='mr-2 w-4 h-4' />,
	},
]

export function Sidebar({ className }: { className?: string }) {
	return (
		<div className={cn(className, 'w-64 border-r p-4 space-y-4')}>
			<div className='space-y-2'>
				<div className='text-sm font-medium text-gray-500 px-2'>Навигация</div>
				{sideBarItems.map(item => (
					<Button
						key={item.id}
						className='w-full justify-start'
						asChild
						variant={'ghost'}
					>
						<Link to={item.link}>
							{item.icon}
							{item.label}
						</Link>
					</Button>
				))}
			</div>
		</div>
	)
}
