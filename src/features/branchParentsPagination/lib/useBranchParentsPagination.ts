import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetBranchesQuery } from '~~>entities/branches';

const useBranchParentsPagination = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const parentPage = searchParams.get('parentPage') ?? '1';
	const parentSort = searchParams.get('parentSort') ?? undefined;

	const [trigger, { data }] = useLazyGetBranchesQuery();

	const onPageChange = (newPage: number) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			parentPage: String(newPage),
		});
	};
	const onPageInc = () => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			parentPage: String(+parentPage + 1),
		});
	};
	const onPageDec = () => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			parentPage: String(+parentPage - 1),
		});
	};

	useEffect(() => {
		trigger(
			{ sort: parentSort?.split('&'), page: String(+parentPage - 1) },
			true
		);
	}, [parentSort, parentPage]);

	return { data, parentPage, onPageChange, onPageInc, onPageDec };
};

export { useBranchParentsPagination };
