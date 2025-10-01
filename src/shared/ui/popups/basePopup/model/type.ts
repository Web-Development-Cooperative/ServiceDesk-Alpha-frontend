import type { ReactNode } from 'react';

type BasePopupProps = {
	setIsOpen: (_state: boolean) => void;
	children: ReactNode;
};

export type { BasePopupProps };
