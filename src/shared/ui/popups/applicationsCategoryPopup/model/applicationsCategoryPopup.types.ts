import type { ChangeEvent } from 'react';
import type { PRIORITY } from '~~>shared/model/baseConsts';
import type { Option } from '~~>shared/ui/inputs';

type ApplicationsCategoryPopupProps = {
	title: string;
	data: {
		name: string;
		description: string;
		priority: string;
		deadlineHours: number;
	};
	onChangeInputField: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeInputNumberField: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeTextareaField: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onChangeSelectField: (
		_value: Option<keyof typeof PRIORITY>,
		name: 'priority'
	) => void;
	onCancel: () => void;
	cancelText: string;
	onSubmit: () => void;
	submitText: string;
};

export type { ApplicationsCategoryPopupProps };
