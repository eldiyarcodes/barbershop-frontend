import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'

export function AppProviders({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
