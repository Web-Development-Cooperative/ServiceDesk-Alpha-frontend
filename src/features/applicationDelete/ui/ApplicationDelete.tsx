import { DeletePopup } from '~~>shared/ui/others';

import { useApplicationDelete } from '../lib/useApplicationDelete';
import type { FC } from 'react';
import type { ApplicationDeleteProps } from '../model/applicationDelete.types';

const ApplicationDelete: FC<ApplicationDeleteProps> = ({
	setIsOpen,
	applicationId,
}) => {
	const { closePopup, onSubmit } = useApplicationDelete({
		setIsOpen,
		applicationId,
	});
	const text = 'Вы уверены, что хотите удалить заявку?';

	return (
		<DeletePopup
			setIsOpen={setIsOpen}
			title="Удаление заявки"
			text={text}
			onSubmit={onSubmit}
			submitText="Удалить"
			onCancel={closePopup}
			cancelText="Отмена"
		/>
	);
};

export { ApplicationDelete };
