import { createBrowserRouter, redirect } from 'react-router-dom'
import { ROUTES } from '../shared/model/routes'
import { App } from './app'
import { AppProviders } from './app-providers'
import { protectedLoader, ProtectedRoute } from './protected-route'

export const router = createBrowserRouter([
	{
		element: (
			<AppProviders>
				<App />
			</AppProviders>
		),
		children: [
			{
				loader: protectedLoader,
				element: <ProtectedRoute />,
				children: [
					{
						path: ROUTES.ADMIN,
						lazy: () => import('@/features/admin/admin.page'),
					},
				],
			},
			{
				path: ROUTES.BARBERSHOPS,
				lazy: () => import('@/features/barbershops/barbershops.page'),
			},
			{
				path: ROUTES.BARBERSHOP,
				lazy: () => import('@/features/barbershop/barbershop.page'),
			},
			{
				path: ROUTES.LOGIN,
				lazy: () => import('@/features/auth/login.page'),
			},
			{
				path: ROUTES.REGISTER,
				lazy: () => import('@/features/auth/register.page'),
			},
			{
				path: ROUTES.APPOINTMENT,
				lazy: () => import('@/features/appointment/appointment.page'),
			},
			{
				path: ROUTES.APPOINTMENT_CONFIRMATION,
				lazy: () =>
					import('@/features/appointment-confirm/appointment-confirm.page'),
			},
			{
				path: ROUTES.APPOINTMENT_CANCEL,
				lazy: () =>
					import('@/features/appointment-cancel/appointment-cancel.page'),
			},
			{
				path: ROUTES.HOME,
				loader: () => redirect(ROUTES.BARBERSHOPS),
			},
		],
	},
])
