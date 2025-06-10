import { ROUTES } from '@/shared/model/routes'
import type { User } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu'
import { MoreHorizontalIcon } from 'lucide-react'
import { href, Link } from 'react-router-dom'

export function UserItem({
	user,
	rightActions,
	menuActions,
}: {
	user: User
	rightActions?: React.ReactNode
	menuActions: React.ReactNode
}) {
	return (
		<div className='flex items-center gap-4 p-4 border-b border-b-gray-100'>
			<div className='flex-grow min-w-0'>
				<Button
					asChild
					variant={'link'}
					className='text-left justify-start h-auto p-0'
				>
					<Link to={href(ROUTES.ADMIN_USER, { userId: String(user.id) })}>
						<span className='text-lg font-medium truncate block'>
							{user.email}
						</span>
					</Link>
				</Button>
			</div>
			<div className='flex items-center gap-2'>
				{rightActions && rightActions}
				{menuActions && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant={'ghost'} size={'icon'}>
								<MoreHorizontalIcon className='h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>{menuActions}</DropdownMenuContent>
					</DropdownMenu>
				)}
			</div>
		</div>
	)
}
