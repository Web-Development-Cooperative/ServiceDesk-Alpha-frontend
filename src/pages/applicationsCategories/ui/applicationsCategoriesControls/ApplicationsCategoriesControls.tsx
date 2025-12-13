import { useState } from 'react';

import { ApplicationsCategoriesSearch } from '~~>features/applicationsCategoriesSearch';
import { ApplicationsCategoriesSort } from '~~>features/applicationsCategoriesSort';
import { ApplicationsCategoryAdd } from '~~>features/applicationsCategoryAdd';
import { BaseButton } from '~~>shared/ui/buttons';
import { Plus } from '~~>shared/ui/icons';

import styles from './ApplicationsCategoriesControls.module.css';

const ApplicationsCategoriesControls = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.controls}>
			<ApplicationsCategoriesSearch />
			<ApplicationsCategoriesSort />
			<BaseButton onClick={() => setIsOpen(true)}>
				<Plus /> Добавить категорию
			</BaseButton>
			{isOpen && <ApplicationsCategoryAdd setIsOpen={setIsOpen} />}
		</div>
	);
};

export { ApplicationsCategoriesControls };
