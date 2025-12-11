import { useEffect } from 'react';
import { useParams } from 'react-router';

import { mapBranch, useLazyGetBranchByIdQuery } from '~~>entities/branch';

const useBranchDisplay = () => {
	const { 'branch-id': branchId } = useParams();
	const [triger, { data }] = useLazyGetBranchByIdQuery();

	useEffect(() => {
		triger(branchId || '');
	}, [branchId]);

	return { data: data ? mapBranch(data) : undefined };
};

export { useBranchDisplay };
