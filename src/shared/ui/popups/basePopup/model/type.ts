import type { ReactNode } from 'react';

type BasePopupProps = {
	setIsOpen: (_state: boolean) => void;
	withCross?: boolean;
	children: ReactNode;
};

export type { BasePopupProps };
