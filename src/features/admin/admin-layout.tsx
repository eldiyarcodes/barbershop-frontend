export function AdminLayout({
	header,
	children,
	filters,
	sidebar,
}: {
	header: React.ReactNode
	children: React.ReactNode
	filters?: React.ReactNode
	sidebar?: React.ReactNode
}) {
	return (
		<div className='container mx-auto'>
			<div className='flex gap-4'>
				{sidebar}
				<div className='flex-1 flex flex-col gap-6 p-4'>
					{header}
					{filters}
					{children}
				</div>
			</div>
		</div>
	)
}

export function AdminLayoutHeader({
	title,
	description,
	actions,
}: {
	title: string
	description?: string
	actions?: React.ReactNode
}) {
	return (
		<div className='flex items-center justify-between'>
			<div className=''>
				<h1 className='text-2xl font-bold'>{title}</h1>
				{description && <p className='text-gray-500'>{description}</p>}
			</div>
			{actions}
		</div>
	)
}

export function AdminLayoutFilters({
	sort,
	actions,
	filters,
}: {
	sort?: React.ReactNode
	filters: React.ReactNode
	actions?: React.ReactNode
}) {
	return (
		<div className='flex items-center gap-4'>
			{filters && (
				<div className='flex items-center gap-2'>
					<span className='text-gray-500 text-sm whitespace-nowrap'>
						Фильтр
					</span>
					{filters}
				</div>
			)}
			{sort && (
				<div className='flex items-center gap-2'>
					<span className='text-gray-500 text-sm whitespace-nowrap'>
						Сортировка
					</span>
					{sort}
				</div>
			)}
			{actions && <div className='ml-auto'>{actions}</div>}
		</div>
	)
}

