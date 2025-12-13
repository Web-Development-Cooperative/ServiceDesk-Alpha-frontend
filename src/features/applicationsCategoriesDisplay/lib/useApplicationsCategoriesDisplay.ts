import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { useLazyGetTicketCategoriesQuery } from '~~>entities/ticketCategory';

const useApplicationsCategoriesDisplay = () => {
	const [searchParams] = useSearchParams();
	// TODO...
	// const search = searchParams.get('search') ?? '';
	const sort = searchParams.get('sort') ?? undefined;
	const page = searchParams.get('page') ?? '1';
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [deleteIsOpen, setDeleteEditIsOpen] = useState(false);
	const [applicationsCategoryId, setApplicationsCategoryId] = useState('');

	const [trigger, { data }] = useLazyGetTicketCategoriesQuery();

	useEffect(() => {
		trigger({ sort: sort?.split('&'), page: String(+page - 1) }, true);
	}, [sort, page]);

	return {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		applicationsCategoryId,
		setApplicationsCategoryId,
		data: data?.content,
	};
};

export { useApplicationsCategoriesDisplay };
