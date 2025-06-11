import { ROUTES } from '@/shared/model/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import type { CreateMasterDto } from './dto'
import { mastersApi } from './masters.api'

export function useCreateMaster() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const createMasterMutation = useMutation({
		mutationKey: ['create-master'],
		mutationFn: mastersApi.createMaster,

		onSuccess() {
			navigate(ROUTES.ADMIN_MASTERS)
			toast.success('Мастер создан')
		},

		async onSettled() {
			await queryClient.invalidateQueries({
				queryKey: [mastersApi.baseKey],
				exact: false,
			})
		},
	})

	const handleCreate = async (master: CreateMasterDto) => {
		console.log('master', master)
		await createMasterMutation.mutate(master)
	}

	return {
		handleCreate,
		isPending: createMasterMutation.isPending,
		isError: createMasterMutation.isError,
		error: createMasterMutation.error,
	}
}
