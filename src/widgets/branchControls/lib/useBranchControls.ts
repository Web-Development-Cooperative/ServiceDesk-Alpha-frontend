import { useState } from 'react';
import { useParams } from 'react-router';

const useBranchControls = () => {
	const { 'branch-id': branchId } = useParams();
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [deleteIsOpen, setDeleteEditIsOpen] = useState(false);

	return {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		branchId,
	};
};

export { useBranchControls };
