import { PaginationBar } from '~~>shared/ui/others';

import { useBranchesTypesPagination } from '../lib/useBranchesTypesPagination';

const BranchesTypesPagination = () => {
	const { data, page, onPageChange, onPageInc, onPageDec } =
		useBranchesTypesPagination();
	return (
		<PaginationBar
			maxPage={data?.totalPages || 1}
			totalElements={data?.totalElements || 0}
			cardinality={
				(data?.content.length || 0) + (data?.size || 0) * (+page - 1)
			}
			currentPage={+page}
			onPageChange={onPageChange}
			onPageInc={onPageInc}
			onPageDec={onPageDec}
		/>
	);
};

export { BranchesTypesPagination };
