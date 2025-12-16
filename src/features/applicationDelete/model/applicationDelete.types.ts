import type { Dispatch, SetStateAction } from 'react';

type ApplicationDeleteProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	applicationId: string;
};

export type { ApplicationDeleteProps };
