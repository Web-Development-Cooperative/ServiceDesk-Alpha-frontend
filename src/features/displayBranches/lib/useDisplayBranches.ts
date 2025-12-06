import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetBranchesQuery } from '~~>entities/branches';

const useDisplayBranches = () => {
	const [searchParams] = useSearchParams();
	// TODO...
	// const search = searchParams.get('search') ?? '';
	const sort = searchParams.get('sort') ?? undefined;
	const page = searchParams.get('page') ?? '1';

	const [trigger, { data }] = useLazyGetBranchesQuery();

	useEffect(() => {
		trigger({ sort: sort?.split(';'), page: String(+page - 1) }, true);
	}, [sort, page]);

	return { data };
};

export { useDisplayBranches };
