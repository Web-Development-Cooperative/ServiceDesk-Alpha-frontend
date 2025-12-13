import type { BranchTypeResponseBody } from '~~>entities/branchTypes';
import type { Option } from '~~>shared/ui/inputs';

const SORT_FIELDS: Record<
	keyof Pick<BranchTypeResponseBody, 'name'>,
	keyof Pick<BranchTypeResponseBody, 'name'>
> = {
	name: 'name',
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
];

export { SORT_ARRAY };
