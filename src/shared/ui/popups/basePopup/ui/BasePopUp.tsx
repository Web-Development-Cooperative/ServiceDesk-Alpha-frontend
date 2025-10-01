import { PopupPortal } from '../../popupPortal/ui/PopupPortal';
import styles from './BasePopup.module.css';
import type { FC } from 'react';
import type { BasePopupProps } from '../model/type';

const BasePopup: FC<BasePopupProps> = (props) => {
	const { setIsOpen, children } = props;

	return (
		<PopupPortal>
			<div
				className={styles['background']}
				onMouseDown={() => setIsOpen(false)}
			>
				<div
					className={styles['modal-responsible']}
					onMouseDown={(e) => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</PopupPortal>
	);
};

export { BasePopup };
