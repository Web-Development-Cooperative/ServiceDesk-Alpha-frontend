import { useState } from 'react';

import { ADD_BRANCH_STEPS } from '../model/addBranchFlow.consts';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { BranchRequestModel } from '~~>entities/branch';
import type { Option } from '~~>shared/ui/inputs';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

const useAddBranchFlow = (setPopupState: Dispatch<SetStateAction<boolean>>) => {
	const [curStage, setCurStage] = useState<keyof typeof ADD_BRANCH_STEPS>(
		ADD_BRANCH_STEPS.main
	);
	const [data, setData] = useState<BranchRequestModel>({
		parent: { id: '-1', name: '' },
		type: { id: '-1', name: '' },
		code: { id: '-1', name: '' },
		name: '',
		area: '',
		address: '',
	});
	const CODES = [
		{ id: '1', name: 'FIR' },
		{ id: '2', name: 'SEC' },
		{ id: '3', name: 'THI' },
		{ id: '4', name: 'FOO' },
		{ id: '5', name: 'FIF' },
	];

	const onChangeInputField = (e: ChangeEvent<HTMLInputElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const onChangeTextareaField = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const onChangeSelectField = (
		value: Option<string>,
		name: keyof Pick<BranchRequestModel, 'parent' | 'code' | 'type'>
	) =>
		setData((cv) => ({
			...cv,
			[name]: { id: value.value, name: value.label },
		}));
	const onChangeParentField = (value: BaseObject) => {
		setData((cv) => ({
			...cv,
			parent: value,
		}));
		setCurStage(ADD_BRANCH_STEPS.main);
	};

	const onParent = () => setCurStage(ADD_BRANCH_STEPS.chooseParent);
	const onMain = () => setCurStage(ADD_BRANCH_STEPS.main);
	const closePopup = () => setPopupState(false);

	return {
		curStage,
		data,
		brancCodes: CODES,
		onChangeInputField,
		onChangeTextareaField,
		onChangeSelectField,
		onChangeParentField,
		onParent,
		onMain,
		closePopup,
	};
};

export { useAddBranchFlow };
