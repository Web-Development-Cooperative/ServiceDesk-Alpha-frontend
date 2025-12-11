type DeletePopupProps = {
	setIsOpen: (_state: boolean) => void;
	title: string;
	text: string;
	onSubmit: () => void;
	onCancel: () => void;
	submitText: string;
	cancelText: string;
};

export type { DeletePopupProps };
