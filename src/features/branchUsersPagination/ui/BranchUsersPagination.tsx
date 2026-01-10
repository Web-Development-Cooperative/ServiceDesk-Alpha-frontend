import { PaginationBar } from '~~>shared/ui/others';

import { useBranchUsersPagination } from '../lib/useBranchUsersPagination';

const BranchUsersPagination = () => {
	const { data, page, onPageChange, onPageInc, onPageDec } =
		useBranchUsersPagination();

	return (
		<PaginationBar
			maxPage={data?.totalPages || 1}
			totalElements={data?.totalElements || 3}
			cardinality={
				(data?.content.length || 0) + (data?.size || 0) * (+page - 1) ||
				3
			}
			name="сотрудников"
			currentPage={+page}
			onPageChange={onPageChange}
			onPageInc={onPageInc}
			onPageDec={onPageDec}
		/>
	);
};

export { BranchUsersPagination };
