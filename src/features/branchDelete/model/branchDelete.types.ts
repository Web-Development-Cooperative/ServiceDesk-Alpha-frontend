import type { Dispatch, SetStateAction } from 'react';

type BranchDeleteProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	branchId: string;
};

export type { BranchDeleteProps };
