import { ROUTES } from '@/shared/model/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { masterSchema } from '../lib/schemas'
import type { CreateMasterDto } from './dto'
import { mastersApi } from './masters.api'
import { useMaster } from './use-master'
import { useBarbershopsList } from '../../barbershops'

export function useEditMaster() {
	const navigate = useNavigate()
	const { masterId } = useParams()

	const queryClient = useQueryClient()

	const changeMasterMutation = useMutation({
		mutationKey: ['edit-master'],
		mutationFn: mastersApi.editMaster,

		onSuccess() {
			navigate(ROUTES.ADMIN_MASTERS)
			toast.info('Мастер изменен')
		},

		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [mastersApi.baseKey],
				exact: false,
			})
		},
	})

	const handleChange = async (master: CreateMasterDto) => {
		await changeMasterMutation.mutate({
			id: Number(masterId),
			master,
		})
	}

	const { data } = useMaster({ id: Number(masterId) })

	const form = useForm({
		resolver: zodResolver(masterSchema),
		defaultValues: {
			fullName: data?.fullName || '',
			specialization: data?.specialization || '',
			barbershopId: Number(data?.barbershopId),
			photoUrl: data?.photoUrl || '',
		},
	})

	useEffect(() => {
		if (data) {
			form.reset({
				fullName: data?.fullName || '',
				specialization: data?.specialization || '',
				barbershopId: Number(data?.barbershopId),
				photoUrl: data?.photoUrl || '',
			})
		}
	}, [data, form])

	return {
		form,
		handleChange,
		isPending: changeMasterMutation.isPending,
		isError: changeMasterMutation.isError,
		error: changeMasterMutation.error,
	}
}
