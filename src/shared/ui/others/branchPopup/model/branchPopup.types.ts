import type { ChangeEvent } from 'react';
import type { BaseObject } from '~~>shared/model/baseEntity.types';
import type { Option } from '~~>shared/ui/inputs';

type BranchPopupProps = {
	title: string;
	data: {
		name: string;
		area: string;
		address: string;
		code: BaseObject;
		type: BaseObject;
		parent: BaseObject;
	};
	brancCodes: Array<BaseObject>;
	brancTypes: Array<BaseObject>;
	onChangeInputField: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeTextareaField: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onChangeSelectField: (
		_value: Option<string>,
		name: keyof Pick<BranchPopupProps['data'], 'parent' | 'type' | 'code'>
	) => void;
	openParentsPopup: () => void;
	onSubmit: () => void;
	onCancel: () => void;
	submitText: string;
	cancelText: string;
};

export type { BranchPopupProps };
