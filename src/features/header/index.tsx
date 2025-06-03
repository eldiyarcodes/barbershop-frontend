import { cn } from '@/shared/lib/tailwind-merge'
import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'
import { Button } from '@/shared/ui/kit/button'
import { ScissorsIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function AppHeader() {
	const navigate = useNavigate()
	const { logout, session } = useSession()

	return (
		<header className='bg-background border-b border-border/40 shadow-sm py-3 px-4 mb-6'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<div className='text-xl font-semibold flex items-center gap-1'>
					<ScissorsIcon />
					Barbershop
				</div>

				<Button
					variant={'outline'}
					size={'sm'}
					onClick={() => {
						if (session) logout()
						else navigate(ROUTES.LOGIN)
					}}
					className={cn(session && 'hover:bg-destructive/10', 'cursor-pointer')}
				>
					{session ? 'Выйти' : 'Войти'}
				</Button>
			</div>
		</header>
	)
}
