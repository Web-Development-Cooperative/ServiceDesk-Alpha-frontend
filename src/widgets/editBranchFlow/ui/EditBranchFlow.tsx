import { BranchPopup } from '~~>shared/ui/others';

import { useEditBranchFlow } from '../lib/useEditBranchFlow';
import { ADD_BRANCH_STEPS } from '../model/EditBranchFlow.consts';
import { ChooseParent } from './chooseParent/ui/ChooseParent';
import type { FC } from 'react';
import type { EditBranchFlowProps } from '../model/EditBranchFlow.types';

const EditBranchFlow: FC<EditBranchFlowProps> = ({ setIsOpen, branchId }) => {
	const {
		curStage,
		data,
		brancCodes,
		brancTypes,
		onChangeInputField,
		onChangeTextareaField,
		onChangeSelectField,
		onChangeParentField,
		onSubmit,
		closePopup,
		onParent,
		onMain,
	} = useEditBranchFlow(setIsOpen, branchId);

	// TODO, все таки поменять попап так, чтобы BasePopup был общим с хедером и футером
	const render = (key: keyof typeof ADD_BRANCH_STEPS) => {
		switch (key) {
			case ADD_BRANCH_STEPS.main:
				return (
					<BranchPopup
						setIsOpen={setIsOpen}
						title="Добавить филиал"
						data={data}
						brancCodes={brancCodes}
						brancTypes={brancTypes}
						onChangeInputField={onChangeInputField}
						onChangeTextareaField={onChangeTextareaField}
						onChangeSelectField={onChangeSelectField}
						openParentsPopup={onParent}
						onSubmit={onSubmit}
						onCancel={closePopup}
						cancelText="Отмена"
						submitText="Сохранить"
					/>
				);
			case ADD_BRANCH_STEPS.chooseParent:
				return (
					<ChooseParent
						setIsOpen={setIsOpen}
						data={data}
						branchId={branchId}
						title="Выбор родительского филиала"
						onSubmit={onChangeParentField}
						onCancel={onMain}
						cancelText="Отменить"
						submitText="Выбрать"
					/>
				);

			default:
				return null;
		}
	};

	return render(curStage);
};

export { EditBranchFlow };
