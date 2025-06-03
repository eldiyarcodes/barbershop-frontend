import { AppHeader } from '@/features/header'
import { ROUTES } from '@/shared/model/routes'
import { Outlet, useLocation } from 'react-router-dom'

export function App() {
	const location = useLocation()

	const isAuthPage =
		location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER

	return (
		<main className='container mx-auto min-h-screen flex flex-col'>
			{!isAuthPage && <AppHeader />}
			<Outlet />
		</main>
	)
}
