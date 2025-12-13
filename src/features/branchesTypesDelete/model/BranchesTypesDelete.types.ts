import type { Dispatch, SetStateAction } from 'react';

type BranchesTypesDeleteProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	branchesTypesId: string;
};

export type { BranchesTypesDeleteProps };
