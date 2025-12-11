import type { BaseObject } from '~~>shared/model/baseEntity.types';

type BranchParentsDisplayProps = {
	branch: BaseObject;
	branchId: string;
	onSelect: (value: BaseObject) => void;
};

export type { BranchParentsDisplayProps };
