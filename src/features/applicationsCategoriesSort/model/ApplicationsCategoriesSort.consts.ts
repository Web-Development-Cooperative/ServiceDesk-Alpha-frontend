import type { TicketCategoryResponseBody } from '~~>entities/ticketCategory';
import type { Option } from '~~>shared/ui/inputs';

const SORT_FIELDS: Record<
	keyof Pick<
		TicketCategoryResponseBody,
		'name' | 'priority' | 'deadlineHours'
	>,
	keyof Pick<
		TicketCategoryResponseBody,
		'name' | 'priority' | 'deadlineHours'
	>
> = {
	name: 'name',
	priority: 'priority',
	deadlineHours: 'deadlineHours',
};
const SORT_TYPES: Record<'asc' | 'desc', 'asc' | 'desc'> = {
	asc: 'asc',
	desc: 'desc',
};
const SORT_ARRAY: Array<Option<string>> = [
	{
		value: `${SORT_FIELDS.name},${SORT_TYPES.asc}`,
		label: 'По названию (А-Я)',
	},
	{
		value: `${SORT_FIELDS.name},${SORT_TYPES.desc}`,
		label: 'По названию (Я-А)',
	},
	{
		value: `${SORT_FIELDS.priority},${SORT_TYPES.asc}`,
		label: 'По приоритету (А-Я)',
	},
	{
		value: `${SORT_FIELDS.priority},${SORT_TYPES.desc}`,
		label: 'По приоритету (Я-А)',
	},
	{
		value: `${SORT_FIELDS.deadlineHours},${SORT_TYPES.asc}`,
		label: 'По возрастанию времени выполнения',
	},
	{
		value: `${SORT_FIELDS.deadlineHours},${SORT_TYPES.desc}`,
		label: 'По убыванию времени выполнения',
	},
];

export { SORT_ARRAY };
