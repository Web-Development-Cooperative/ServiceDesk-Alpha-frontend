import { ApplicationMainDisplay } from '~~>features/applicationMainDisplay';
import { ApplicationDataDisplay } from '~~>features/applicationDataDisplay';
import { InfoSection } from '~~>shared/ui/others';

import { ApplicationControls } from './applicationControls/ApplicationControls';
import styles from './ApplicationPage.module.css';

const ApplicationPage = () => {
	return (
		<div className={styles.page}>
			<ApplicationControls />
			<InfoSection title="Основная информация">
				<ApplicationMainDisplay />
			</InfoSection>
			<InfoSection title="Данные заявки">
				<ApplicationDataDisplay />
			</InfoSection>
			<InfoSection title="Комментарии" controls={<p>Комментариев: 3</p>}>
				<ApplicationDataDisplay />
			</InfoSection>
		</div>
	);
};

export { ApplicationPage };
