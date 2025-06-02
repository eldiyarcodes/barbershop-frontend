import { AppHeader } from '@/features/header'
import { ROUTES } from '@/shared/model/routes'
import { Outlet, useLocation } from 'react-router-dom'

export function App() {
	const location = useLocation()

	return (
		<main className='container mx-auto min-h-screen flex flex-col'>
			{location.pathname !== ROUTES.LOGIN && <AppHeader />}
			<Outlet />
		</main>
	)
}
