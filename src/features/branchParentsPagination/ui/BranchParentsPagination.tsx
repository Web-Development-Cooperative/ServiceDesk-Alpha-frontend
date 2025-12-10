import { PaginationBar } from '~~>shared/ui/others';

import { useBranchParentsPagination } from '../lib/useBranchParentsPagination';

const BranchParentsPagination = () => {
	const { data, parentPage, onPageChange, onPageInc, onPageDec } =
		useBranchParentsPagination();

	return (
		<PaginationBar
			maxPage={data?.totalPages || 1}
			totalElements={data?.totalElements || 0}
			cardinality={(data?.content.length || 0) * +parentPage}
			currentPage={+parentPage}
			onPageChange={onPageChange}
			onPageInc={onPageInc}
			onPageDec={onPageDec}
		/>
	);
};

export { BranchParentsPagination };
