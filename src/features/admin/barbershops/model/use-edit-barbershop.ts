import { ROUTES } from '@/shared/model/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { barbershopSchema } from '../lib/schemas'
import { barbershopsApi } from './barbershops.api'
import type { CreateBarbershopDto } from './dto'
import { useBarbershop } from './use-barbershop'

export function useEditBarbershop() {
	const navigate = useNavigate()
	const { barbershopId } = useParams()

	const queryClient = useQueryClient()

	const changeBarbershopMutation = useMutation({
		mutationKey: ['edit-barbershop'],
		mutationFn: barbershopsApi.editBarbershop,

		onSuccess() {
			navigate(ROUTES.ADMIN_BARBERSHOPS)
			toast.info('Барбершоп изменен')
		},

		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [barbershopsApi.baseKey],
				exact: false,
			})
		},
	})

	const handleChange = async (barbershop: CreateBarbershopDto) => {
		await changeBarbershopMutation.mutate({
			id: Number(barbershopId),
			barbershop,
		})
	}

	const { data } = useBarbershop({ id: Number(barbershopId) })

	const form = useForm({
		resolver: zodResolver(barbershopSchema),
		defaultValues: {
			name: data?.name || '',
			address: data?.address || '',
			phone: data?.phone || '',
			description: data?.description || '',
			workDays: data?.workDays || [],
			timeFrom: data?.timeFrom || '',
			timeTo: data?.timeTo || '',
		},
	})

	useEffect(() => {
		if (data) {
			form.reset({
				name: data.name,
				address: data.address,
				phone: data.phone,
				description: data.description,
				workDays: data.workDays,
				timeFrom: data.timeFrom,
				timeTo: data.timeTo,
			})
		}
	}, [data, form])

	return {
		form,
		handleChange,
		isPending: changeBarbershopMutation.isPending,
		isError: changeBarbershopMutation.isError,
		error: changeBarbershopMutation.error,
	}
}
