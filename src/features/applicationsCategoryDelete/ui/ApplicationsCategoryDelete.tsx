import { DeletePopup } from '~~>shared/ui/others';

import { useApplicationsCategoryDelete } from '../lib/useApplicationsCategoryDelete';
import type { FC } from 'react';
import type { ApplicationsCategoryDeleteProps } from '../model/applicationsCategoryDelete.types';

const ApplicationsCategoryDelete: FC<ApplicationsCategoryDeleteProps> = ({
	setIsOpen,
	applicationsCategoryId,
}) => {
	const { closePopup, onSubmit } = useApplicationsCategoryDelete({
		setIsOpen,
		applicationsCategoryId,
	});
	const text = 'Вы уверены, что хотите удалить категорию?';

	return (
		<DeletePopup
			setIsOpen={setIsOpen}
			title="Удаление категории"
			text={text}
			onSubmit={onSubmit}
			submitText="Удалить"
			onCancel={closePopup}
			cancelText="Отмена"
		/>
	);
};

export { ApplicationsCategoryDelete };
