import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { ApplicationsCategoriesDisplay } from '~~>features/applicationsCategoriesDisplay';
import { ApplicationsCategoriesPagination } from '~~>features/applicationsCategoriesPagination';

import { ApplicationsCategoriesControls } from './applicationsCategoriesControls/ApplicationsCategoriesControls';
import styles from './ApplicationsCategories.module.css';

const ApplicationsCategories = () => {
	return (
		<div className={styles.page}>
			<h1>Категории заявок</h1>
			<ApplicationsCategoriesControls />
			<TableWithPagination>
				<ApplicationsCategoriesDisplay />
				<ApplicationsCategoriesPagination />
			</TableWithPagination>
		</div>
	);
};

export { ApplicationsCategories };
