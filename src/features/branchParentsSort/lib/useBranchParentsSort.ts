import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { SORT_ARRAY } from '../model/branchParentsSort.consts';
import type { Option } from '~~>shared/ui/inputs';

const useBranchParentsSort = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const parentSort = searchParams.get('parentSort') ?? undefined;

	const onChangeSort = (value: Option) =>
		setSearchParams({
			...Object.fromEntries(searchParams),
			parentSort: value.value,
			parentPage: '1',
		});

	useEffect(() => {
		if (!SORT_ARRAY.some((o) => o.value === parentSort)) {
			const params = Object.fromEntries(searchParams);
			delete params.parentSort;
			params.parentPage = '1';
			setSearchParams(params);
		}
	}, []);

	return { parentSort, onChangeSort };
};

export { useBranchParentsSort };
