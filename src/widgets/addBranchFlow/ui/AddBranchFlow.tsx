import { BasePopup } from '~~>shared/ui/popups';
import { BranchPopup } from '~~>shared/ui/others';

import { useAddBranchFlow } from '../lib/useAddBranchFlow';
import { ADD_BRANCH_STEPS } from '../model/addBranchFlow.consts';
import { ChooseParent } from '../../chooseParent';
import type { FC } from 'react';
import type { AddBranchFlowProps } from '../model/addBranchFlow.types';

const AddBranchFlow: FC<AddBranchFlowProps> = ({ setIsOpen }) => {
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
	} = useAddBranchFlow(setIsOpen);

	const render = (key: keyof typeof ADD_BRANCH_STEPS) => {
		switch (key) {
			case ADD_BRANCH_STEPS.main:
				return (
					<BranchPopup
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
						data={data}
						branchId="0"
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

	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			{render(curStage)}
		</BasePopup>
	);
};

export { AddBranchFlow };
