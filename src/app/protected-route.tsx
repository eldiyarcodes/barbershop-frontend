import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'
import { Navigate, Outlet, redirect } from 'react-router-dom'

export function ProtectedRoute() {
	const session = useSession(s => s.session)

	if (session && session.role === 'ADMIN') {
		return <Outlet />
	}

	return <Navigate to={ROUTES.LOGIN} replace />
}

export async function protectedLoader() {
	const token = await useSession.getState().refresh()

	if (!token) {
		return redirect(ROUTES.LOGIN)
	}

	return null
}
