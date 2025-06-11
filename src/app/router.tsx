import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '../shared/model/routes'
import { App } from './app'
import { AppProviders } from './app-providers'
import { protectedLoader, ProtectedRoute } from './protected-route'
import { Redirect } from './redirect'

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
						lazy: () => import('@/features/admin/users/admin.page'),
					},
					{
						path: ROUTES.ADMIN_CREATE_USER,
						lazy: () => import('@/features/admin/users/admin-create-user.page'),
					},
					{
						path: ROUTES.ADMIN_BARBERSHOPS,
						lazy: () =>
							import('@/features/admin/barbershops/admin-barbershops.page'),
					},
					{
						path: ROUTES.ADMIN_CREATE_BARBERSHOP,
						lazy: () =>
							import(
								'@/features/admin/barbershops/admin-create-barbershop.page'
							),
					},
					{
						path: ROUTES.ADMIN_BARBERSHOP,
						lazy: () =>
							import('@/features/admin/barbershops/admin-edit-barbershop.page'),
					},
					{
						path: ROUTES.ADMIN_MASTERS,
						lazy: () => import('@/features/admin/masters/admin-masters.page'),
					},
					{
						path: ROUTES.ADMIN_MASTER,
						lazy: () => import('@/features/admin/masters/admin-edit-master'),
					},
					{
						path: ROUTES.ADMIN_CREATE_MASTER,
						lazy: () =>
							import('@/features/admin/masters/admin-create-master.page'),
					},
					{
						path: ROUTES.ADMIN_APPOINTMENTS,
						lazy: () =>
							import('@/features/admin/appointments/admin-appointments.page'),
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
				path: ROUTES.HOME,
				element: <Redirect />,
			},
		],
	},
])
