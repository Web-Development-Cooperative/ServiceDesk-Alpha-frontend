import type { Dispatch, SetStateAction } from 'react';

type BranchesTypesEditProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	branchesTypesId: string;
};

export type { BranchesTypesEditProps };
