import { useEffect, useState } from 'react';

import {
	mapBranch,
	mapBranchPost,
	useLazyGetBranchByIdQuery,
	usePutBranchByIdMutation,
} from '~~>entities/branch';
import {
	mapBranchCode,
	useLazyGetBranchCodesQuery,
} from '~~>entities/branchCodes';
import { useLazyGetBranchTypeesQuery } from '~~>entities/branchTypes';

import { ADD_BRANCH_STEPS } from '../model/EditBranchFlow.consts';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { BranchRequestModel } from '~~>entities/branch';
import type { Option } from '~~>shared/ui/inputs';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

const useEditBranchFlow = (
	setPopupState: Dispatch<SetStateAction<boolean>>,
	branchId: string
) => {
	const [trigger, { data: branchData }] = useLazyGetBranchByIdQuery();
	const [triggerCodes, { data: codesData }] = useLazyGetBranchCodesQuery();
	const [triggeTypes, { data: typesData }] = useLazyGetBranchTypeesQuery();
	const [putBranch] = usePutBranchByIdMutation();

	const mapped = branchData ? mapBranch(branchData) : null;
	const mappedCodes = codesData?.content
		? codesData.content.map((o) => mapBranchCode(o))
		: [];

	const [curStage, setCurStage] = useState<keyof typeof ADD_BRANCH_STEPS>(
		ADD_BRANCH_STEPS.main
	);
	const [data, setData] = useState<BranchRequestModel>({
		parent: {
			id: mapped?.parent?.id || '-1',
			name: mapped?.parent?.name || '',
		},
		type: {
			id: mapped?.type.id || '-1',
			name: mapped?.type.name || '',
		},
		code: {
			id: mapped?.code.id || '-1',
			name: mapped?.code.name || '',
		},
		name: mapped?.name || '',
		area: mapped?.area || '',
		address: mapped?.address || '',
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
	const onSubmit = () => putBranch({ branchId, body: mapBranchPost(data) });

	useEffect(() => {
		trigger(branchId);
		triggerCodes({});
		triggeTypes({});
	}, []);

	useEffect(() => {
		setData({
			parent: {
				id: mapped?.parent?.id || '-1',
				name: mapped?.parent?.name || '',
			},
			type: {
				id: mapped?.type.id || '-1',
				name: mapped?.type.name || '',
			},
			code: {
				id: mapped?.code.id || '-1',
				name: mapped?.code.name || '',
			},
			name: mapped?.name || '',
			area: mapped?.area || '',
			address: mapped?.address || '',
		});
	}, [branchData]);

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

export { useEditBranchFlow };
