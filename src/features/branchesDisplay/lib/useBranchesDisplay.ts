import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetBranchesQuery } from '~~>entities/branches';

const useBranchesDisplay = () => {
	const [searchParams] = useSearchParams();
	// TODO...
	// const search = searchParams.get('search') ?? '';
	const sort = searchParams.get('sort') ?? undefined;
	const page = searchParams.get('page') ?? '1';
	const [isOpen, setIsOpen] = useState(false);
	const [branchId, setBranchId] = useState('');

	const [trigger, { data }] = useLazyGetBranchesQuery();

	useEffect(() => {
		trigger({ sort: sort?.split('&'), page: String(+page - 1) }, true);
	}, [sort, page]);

	return {
		isOpen,
		setIsOpen,
		branchId,
		setBranchId,
		data: data?.content,
	};
};

export { useBranchesDisplay };
