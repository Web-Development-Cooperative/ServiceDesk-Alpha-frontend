import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router';

import { useLazyGetEmployeesQuery } from '~~>entities/employees';

const useBranchUsersPagination = () => {
	const { 'branch-id': branchId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get('page') ?? '1';
	const sort = searchParams.get('sort') ?? undefined;

	const [trigger, { data }] = useLazyGetEmployeesQuery();

	const onPageChange = (newPage: number) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: String(newPage),
		});
	};
	const onPageInc = () => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: String(+page + 1),
		});
	};
	const onPageDec = () => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: String(+page - 1),
		});
	};

	useEffect(() => {
		trigger(
			{
				url: branchId || 'ooops',
				params: { sort: sort?.split('&'), page: String(+page - 1) },
			},
			true
		);
	}, [sort, page]);

	return { data, page, onPageChange, onPageInc, onPageDec };
};

export { useBranchUsersPagination };
