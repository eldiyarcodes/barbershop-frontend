import type { User } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu'
import { MoreHorizontalIcon } from 'lucide-react'

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
		<div className='flex items-center gap-4 p-4 border-b border-b-gray-200'>
			<div className='flex-grow min-w-0'>
				<span className='text-lg font-medium truncate block'>{user.email}</span>
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
