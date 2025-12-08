import type { BranchResponseBody } from '~~>entities/branches';
import type { Option } from '~~>shared/ui/inputs';

const SORT_FIELDS: Record<
	keyof Omit<BranchResponseBody, 'id' | 'address'> | 'date',
	keyof Omit<BranchResponseBody, 'id' | 'address'> | 'date'
> = {
	name: 'name',
	area: 'area',
	date: 'date',
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
		value: `${SORT_FIELDS.area},${SORT_TYPES.asc}`,
		label: 'По региону (А-Я)',
	},
	{
		value: `${SORT_FIELDS.area},${SORT_TYPES.desc}`,
		label: 'По региону (Я-А)',
	},
	{ value: `${SORT_FIELDS.date},${SORT_TYPES.desc}`, label: 'Сначала новые' },
	{ value: `${SORT_FIELDS.date},${SORT_TYPES.asc}`, label: 'Сначала старые' },
];

export { SORT_ARRAY };
