import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import {
	useLazyGetBranchesParentsQuery,
	useLazyGetBranchesQuery,
} from '~~>entities/branches';

const useBranchParentsDisplay = (branchId: string) => {
	const [searchParams] = useSearchParams();
	// TODO...
	// const search = searchParams.get('search') ?? '';
	const sort = searchParams.get('sort') ?? undefined;
	const page = searchParams.get('page') ?? '1';

	const [trigger, { data }] = useLazyGetBranchesParentsQuery();
	const [triggerAll, { data: dataAll }] = useLazyGetBranchesQuery();

	console.log(branchId);
	useEffect(() => {
		if (branchId === '0')
			triggerAll(
				{ sort: sort?.split('&'), page: String(+page - 1) },
				true
			);
		else
			trigger(
				{
					url: branchId,
					params: {
						sort: sort?.split('&'),
						page: String(+page - 1),
					},
				},
				true
			);
	}, [sort, page]);

	return {
		data: branchId === '0' ? dataAll?.content : data?.content,
	};
};

export { useBranchParentsDisplay };
