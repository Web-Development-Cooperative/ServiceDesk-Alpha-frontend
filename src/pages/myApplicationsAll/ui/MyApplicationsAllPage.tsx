import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { MyApplicationsDisplay } from '~~>features/myApplicationsDisplay';
import { MyApplicationsPagination } from '~~>features/myApplicationsPagination';

const MyApplicationsAllPage = () => {
	return (
		<TableWithPagination>
			<MyApplicationsDisplay />
			<MyApplicationsPagination />
		</TableWithPagination>
	);
};

export { MyApplicationsAllPage };
