import type { BranchRequestModel } from '~~>entities/branch';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

type ChooseParentProps = {
	setIsOpen: (_state: boolean) => void;
	title: string;
	data: BranchRequestModel;
	onSubmit: (value: BaseObject) => void;
	onCancel: () => void;
	submitText: string;
	cancelText: string;
};

export type { ChooseParentProps };
