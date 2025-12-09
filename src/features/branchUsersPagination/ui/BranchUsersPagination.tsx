import { PaginationBar } from '~~>shared/ui/others';

import { useBranchUsersPagination } from '../lib/useBranchUsersPagination';

const BranchUsersPagination = () => {
	const { data, page, onPageChange, onPageInc, onPageDec } =
		useBranchUsersPagination();

	return (
		<PaginationBar
			maxPage={data?.totalPages || 1}
			totalElements={data?.totalElements || 0}
			cardinality={(data?.content.length || 0) * +page}
			currentPage={+page}
			onPageChange={onPageChange}
			onPageInc={onPageInc}
			onPageDec={onPageDec}
		/>
	);
};

export { BranchUsersPagination };
