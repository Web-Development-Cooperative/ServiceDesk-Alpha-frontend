import type { Dispatch, SetStateAction } from 'react';

type EditBranchFlowProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	branchId: string;
};

export type { EditBranchFlowProps };
