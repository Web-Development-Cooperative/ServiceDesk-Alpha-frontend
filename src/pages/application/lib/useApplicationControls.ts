import { useState } from 'react';
import { useParams } from 'react-router';

const useApplicationControls = () => {
	const { 'application-id': applicationId } = useParams();
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [deleteIsOpen, setDeleteEditIsOpen] = useState(false);

	return {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		applicationId,
	};
};

export { useApplicationControls };
