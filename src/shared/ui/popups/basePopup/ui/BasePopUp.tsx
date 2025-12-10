import { PopupCross } from '~~>shared/ui/icons';

import { PopupPortal } from '../../popupPortal/ui/PopupPortal';
import styles from './BasePopup.module.css';
import type { FC } from 'react';
import type { BasePopupProps } from '../model/type';

const BasePopup: FC<BasePopupProps> = (props) => {
	const { setIsOpen, withCross = false, children } = props;

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
					{withCross && (
						<PopupCross
							className={styles.cross}
							onClick={() => setIsOpen(false)}
						/>
					)}
					{children}
				</div>
			</div>
		</PopupPortal>
	);
};

export { BasePopup };
