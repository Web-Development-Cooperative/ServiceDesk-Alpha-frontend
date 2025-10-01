import { useEffect } from 'react';
import { useParams } from 'react-router';

import { getUser } from '~~>entities/user';
import { useAppDispatch } from '~~>shared/lib';

const UserPage = () => {
	const dispatch = useAppDispatch();

	const { userId } = useParams();

	useEffect(() => {
		dispatch(getUser({ url: userId }));
	}, []);

	return <p>sdf</p>;
};

export { UserPage };
