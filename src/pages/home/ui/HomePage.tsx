import { useState } from 'react';

import { BaseButton } from '~~>shared/ui/buttons';
import { WDCLoader } from '~~>shared/ui/others';

import styles from './HomePage.module.css';

const HomePage = () => {
	const [state, setState] = useState(1);

	return (
		<div className={styles['home-page']}>
			<p>Count clicks: {state}</p>
			<WDCLoader />
			<BaseButton onClick={() => setState((cv) => cv + 1)} />
		</div>
	);
};

export { HomePage };
