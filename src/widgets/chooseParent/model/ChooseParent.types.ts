import type { BranchRequestModel } from '~~>entities/branch';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

type ChooseParentProps = {
	title: string;
	data: BranchRequestModel;
	branchId: string;
	onSubmit: (value: BaseObject) => void;
	onCancel: () => void;
	submitText: string;
	cancelText: string;
};

export type { ChooseParentProps };
