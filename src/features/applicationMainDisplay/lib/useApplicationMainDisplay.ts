import { useEffect } from 'react';
import { useParams } from 'react-router';

import { mapBranch, useLazyGetBranchByIdQuery } from '~~>entities/branch';
// import { ROUTES } from '~~>shared/model/routes';
const useApplicationMainDisplay = () => {
	const { 'aplpication-id': applicationId } = useParams();
	// const navigate = useNavigate();
	const [trigger, { data }] = useLazyGetBranchByIdQuery();

	useEffect(() => {
		const fetch = async () => {
			try {
				await trigger(applicationId || '', true).unwrap();
			} catch (error) {
				const err = error as { status: number };
				console.log(err);
				// if ([400, 404, 500].includes(err.status))
				// 	navigate(ROUTES.MY_APPLICATIONS_All);
			}
		};

		fetch();
	}, [applicationId]);

	return { data: data ? mapBranch(data) : undefined };
};

export { useApplicationMainDisplay };
