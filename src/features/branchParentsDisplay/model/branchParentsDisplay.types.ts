import type { BaseObject } from '~~>shared/model/baseEntity.types';

type BranchParentsDisplayProps = {
	branch: BaseObject;
	onSelect: (value: BaseObject) => void;
};

export type { BranchParentsDisplayProps };
