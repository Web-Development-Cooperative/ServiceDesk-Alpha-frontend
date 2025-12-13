import type { Dispatch, SetStateAction } from 'react';

type ApplicationsCategoryEditProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	applicationsCategoryId: string;
};

export type { ApplicationsCategoryEditProps };
