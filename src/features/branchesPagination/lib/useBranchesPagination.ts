import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetBranchesQuery } from '~~>entities/branches';

const useBranchesPagination = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get('page') ?? '1';
	const sort = searchParams.get('sort') ?? undefined;

	const [trigger, { data }] = useLazyGetBranchesQuery();

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
			{ size: '1', sort: sort?.split('&'), page: String(+page - 1) },
			true
		);
	}, [sort, page]);

	return { data, page, onPageChange, onPageInc, onPageDec };
};

export { useBranchesPagination };
