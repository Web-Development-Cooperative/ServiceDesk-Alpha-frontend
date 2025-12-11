import { useEffect, useState } from 'react';

import {
	mapBranchCode,
	useLazyGetBranchCodesQuery,
} from '~~>entities/branchCodes';
import { useLazyGetBranchTypeesQuery } from '~~>entities/branchTypes';
import { mapBranchPost, usePostBranchMutation } from '~~>entities/branch';

import { ADD_BRANCH_STEPS } from '../model/addBranchFlow.consts';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { BranchRequestModel } from '~~>entities/branch';
import type { Option } from '~~>shared/ui/inputs';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

const useAddBranchFlow = (setPopupState: Dispatch<SetStateAction<boolean>>) => {
	const [triggerCodes, { data: codesData }] = useLazyGetBranchCodesQuery();
	const [triggeTypes, { data: typesData }] = useLazyGetBranchTypeesQuery();
	const [postBranch] = usePostBranchMutation();

	const mappedCodes = codesData?.content
		? codesData.content.map((o) => mapBranchCode(o))
		: [];

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
	const onSubmit = async () => {
		try {
			await postBranch(mapBranchPost(data)).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		triggerCodes({});
		triggeTypes({});
	}, []);

	return {
		curStage,
		data,
		brancCodes: mappedCodes,
		brancTypes: typesData?.content || [],
		onChangeInputField,
		onChangeTextareaField,
		onChangeSelectField,
		onChangeParentField,
		onSubmit,
		onParent,
		onMain,
		closePopup,
	};
};

export { useAddBranchFlow };
