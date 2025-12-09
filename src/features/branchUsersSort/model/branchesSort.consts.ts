import type { EmployeeResponseBody } from '~~>entities/employees';
import type { Option } from '~~>shared/ui/inputs';

const SORT_FIELDS: Record<
	keyof Pick<EmployeeResponseBody['user'], 'last_name'>,
	keyof Pick<EmployeeResponseBody['user'], 'last_name'>
> = {
	last_name: 'last_name',
};
const SORT_TYPES: Record<'asc' | 'desc', 'asc' | 'desc'> = {
	asc: 'asc',
	desc: 'desc',
};
const SORT_ARRAY: Array<Option<string>> = [
	{
		value: `${SORT_FIELDS.last_name},${SORT_TYPES.asc}`,
		label: 'По фамилии (А-Я)',
	},
	{
		value: `${SORT_FIELDS.last_name},${SORT_TYPES.desc}`,
		label: 'По фамилии (Я-А)',
	},
];

export { SORT_ARRAY };
