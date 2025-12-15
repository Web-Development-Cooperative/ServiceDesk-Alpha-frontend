import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetBranchesQuery } from '~~>entities/branches';

const useMyApplicationsDisplay = () => {
	const [searchParams] = useSearchParams();
	// TODO...
	// const search = searchParams.get('search') ?? '';
	const sort = searchParams.get('sort') ?? undefined;
	const page = searchParams.get('page') ?? '1';
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [deleteIsOpen, setDeleteEditIsOpen] = useState(false);
	const [branchId, setBranchId] = useState('');

	const [trigger, { data }] = useLazyGetBranchesQuery();

	useEffect(() => {
		trigger({ sort: sort?.split('&'), page: String(+page - 1) }, true);
	}, [sort, page]);

	return {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		branchId,
		setBranchId,
		data: data?.content,
	};
};

export { useMyApplicationsDisplay };
