import { BranchPopup } from '~~>shared/ui/others';

import { useAddBranchFlow } from '../lib/useAddBranchFlow';
import { ADD_BRANCH_STEPS } from '../model/addBranchFlow.consts';
import { ChooseParent } from './chooseParent/ui/ChooseParent';
import type { FC } from 'react';
import type { AddBranchFlowProps } from '../model/addBranchFlow.types';

const AddBranchFlow: FC<AddBranchFlowProps> = ({ setIsOpen }) => {
	const {
		curStage,
		data,
		brancCodes,
		onChangeInputField,
		onChangeTextareaField,
		onChangeSelectField,
		onChangeParentField,
		closePopup,
		onParent,
		onMain,
	} = useAddBranchFlow(setIsOpen);

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
						onChangeInputField={onChangeInputField}
						onChangeTextareaField={onChangeTextareaField}
						onChangeSelectField={onChangeSelectField}
						openParentsPopup={onParent}
						onSubmit={() => console.log(data)}
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
						title="Выбор родительского филиала"
						onSubmit={onChangeParentField}
						onCancel={onMain}
						cancelText="Отмена"
						submitText="Сохранить"
					/>
				);

			default:
				return null;
		}
	};

	return render(curStage);
};

export { AddBranchFlow };
