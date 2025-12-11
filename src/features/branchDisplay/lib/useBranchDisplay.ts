import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { mapBranch, useLazyGetBranchByIdQuery } from '~~>entities/branch';
import { ROUTES } from '~~>shared/model/routes';

const useBranchDisplay = () => {
	const { 'branch-id': branchId } = useParams();
	const navigate = useNavigate();
	const [trigger, { data }] = useLazyGetBranchByIdQuery();

	useEffect(() => {
		const fetch = async () => {
			try {
				await trigger(branchId || '', true).unwrap();
			} catch (error) {
				const err = error as { status: number };
				if ([400, 404, 500].includes(err.status))
					navigate(ROUTES.BRANCHES);
			}
		};

		fetch();
	}, [branchId]);

	return { data: data ? mapBranch(data) : undefined };
};

export { useBranchDisplay };
