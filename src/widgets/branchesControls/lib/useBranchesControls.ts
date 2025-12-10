import { useState } from 'react';

const useBranchesControls = () => {
	const [popupState, setPopupState] = useState(false);

	const openPopup = () => setPopupState(true);

	return {
		popupState,
		setPopupState,
		openPopup,
	};
};

export { useBranchesControls };
