import type { ChangeEvent } from 'react';

type BranchesTypesPopupProps = {
	title: string;
	data: {
		name: string;
	};
	onChangeInputField: (e: ChangeEvent<HTMLInputElement>) => void;
	onCancel: () => void;
	cancelText: string;
	onSubmit: () => void;
	submitText: string;
};

export type { BranchesTypesPopupProps };
