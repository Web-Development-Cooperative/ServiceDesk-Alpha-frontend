import { PaginationBar } from '~~>shared/ui/others';

import { useBranchParentsPagination } from '../lib/useBranchParentsPagination';
import type { FC } from 'react';

const BranchParentsPagination: FC<{ branchId: string }> = ({ branchId }) => {
	const { data, parentPage, onPageChange, onPageInc, onPageDec } =
		useBranchParentsPagination(branchId);

	return (
		<PaginationBar
			maxPage={data?.totalPages || 1}
			totalElements={data?.totalElements || 0}
			cardinality={
				(data?.content.length || 0) +
				(data?.size || 0) * (+parentPage - 1)
			}
			name="филиалов"
			currentPage={+parentPage}
			onPageChange={onPageChange}
			onPageInc={onPageInc}
			onPageDec={onPageDec}
		/>
	);
};

export { BranchParentsPagination };
