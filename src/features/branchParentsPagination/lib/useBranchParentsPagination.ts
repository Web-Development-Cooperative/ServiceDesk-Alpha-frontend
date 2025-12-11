import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import {
	useLazyGetBranchesParentsQuery,
	useLazyGetBranchesQuery,
} from '~~>entities/branches';

const useBranchParentsPagination = (branchId: string) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const parentPage = searchParams.get('parentPage') ?? '1';
	const parentSort = searchParams.get('parentSort') ?? undefined;

	const [trigger, { data }] = useLazyGetBranchesParentsQuery();
	const [triggerAll, { data: dataAll }] = useLazyGetBranchesQuery();

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
		if (branchId === '0')
			triggerAll(
				{ sort: parentSort?.split('&'), page: String(+parentPage - 1) },
				true
			);
		else
			trigger(
				{
					url: branchId,
					params: {
						sort: parentSort?.split('&'),
						page: String(+parentPage - 1),
					},
				},
				true
			);
	}, [parentSort, parentPage]);

	return {
		data: branchId === '0' ? dataAll : data,
		parentPage,
		onPageChange,
		onPageInc,
		onPageDec,
	};
};

export { useBranchParentsPagination };
