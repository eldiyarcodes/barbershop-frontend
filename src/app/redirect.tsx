import { ROUTES } from '@/shared/model/routes'
import { useSession } from '@/shared/model/session'
import { Navigate } from 'react-router-dom'

export function Redirect() {
	const { session } = useSession()

	if (session && session.role === 'ADMIN') {
		return <Navigate to={ROUTES.ADMIN} />
	}

	return <Navigate to={ROUTES.BARBERSHOPS} />
}
