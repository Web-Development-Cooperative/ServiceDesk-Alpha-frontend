import type { Dispatch, SetStateAction } from 'react';

type ApplicationsCategoryDeleteProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	applicationsCategoryId: string;
};

export type { ApplicationsCategoryDeleteProps };
