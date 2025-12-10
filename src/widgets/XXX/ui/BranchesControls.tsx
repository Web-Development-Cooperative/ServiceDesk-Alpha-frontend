import { BranchesSearch } from '~~>features/branchesSearch';
import { BranchesSort } from '~~>features/branchesSort';
import { BaseButton } from '~~>shared/ui/buttons';
import { BranchPopup } from '~~>shared/ui/others';
import { Plus } from '~~>shared/ui/icons';

import { useBranchesControls } from '../lib/useBranchesControls';
import styles from './BranchesControls.module.css';

const BranchesControls = () => {
	const {
		popupState,
		data,
		brancCodes,
		setPopupState,
		onChangeInputField,
		onChangeTextareaField,
		onChangeSelectField,
		openPopup,
		closePopup,
	} = useBranchesControls();

	return (
		<div className={styles.controls}>
			<BranchesSearch />
			<BranchesSort />
			<BaseButton onClick={openPopup}>
				<Plus /> Добавить филиал
			</BaseButton>
			{popupState && (
				<BranchPopup
					setIsOpen={setPopupState}
					title="Добавить филиал"
					data={data}
					brancCodes={brancCodes}
					onChangeInputField={onChangeInputField}
					onChangeTextareaField={onChangeTextareaField}
					onChangeSelectField={onChangeSelectField}
					openParentsPopup={() => console.log('Тут открытие модалки')}
					onSubmit={() => console.log(data)}
					onCancel={closePopup}
					cancelText="Отмена"
					submitText="Сохранить"
				/>
			)}
		</div>
	);
};

export { BranchesControls };
