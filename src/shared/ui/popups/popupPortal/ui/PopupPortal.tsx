import { createPortal } from 'react-dom';

import { usePopup } from '../lib/usePopup';
import type { FC } from 'react';
import type { PopupPortalProps } from '../model/types';

const PopupPortal: FC<PopupPortalProps> = ({ children }) => {
	const container = usePopup();

	if (!container) return null;
	return createPortal(children, container);
};

export { PopupPortal };
