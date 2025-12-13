import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetBranchTypeesQuery } from '~~>entities/branchTypes';

const useBranchesTypesDisplay = () => {
	const [searchParams] = useSearchParams();
	// TODO...
	// const search = searchParams.get('search') ?? '';
	const sort = searchParams.get('sort') ?? undefined;
	const page = searchParams.get('page') ?? '1';
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [deleteIsOpen, setDeleteEditIsOpen] = useState(false);
	const [branchesTypesId, setBranchesTypesId] = useState('');

	const [trigger, { data }] = useLazyGetBranchTypeesQuery();

	useEffect(() => {
		trigger({ sort: sort?.split('&'), page: String(+page - 1) }, true);
	}, [sort, page]);

	return {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		branchesTypesId,
		setBranchesTypesId,
		data: data?.content,
	};
};

export { useBranchesTypesDisplay };
