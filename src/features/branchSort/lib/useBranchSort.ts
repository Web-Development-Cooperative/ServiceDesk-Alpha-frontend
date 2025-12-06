import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { SORT_ARRAY } from '../model/branchesControls.consts';
import type { Option } from '~~>shared/ui/inputs';

const useBranchSort = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const sort = searchParams.get('sort') ?? undefined;

	const onChangeSort = (value: Option) =>
		setSearchParams({
			...Object.fromEntries(searchParams),
			sort: value.value,
			page: '1',
		});

	useEffect(() => {
		if (!SORT_ARRAY.some((o) => o.value === sort)) {
			const params = Object.fromEntries(searchParams);
			delete params.sort;
			params.page = '1';
			setSearchParams(params);
		}
	}, []);

	return { sort, onChangeSort };
};

export { useBranchSort };
