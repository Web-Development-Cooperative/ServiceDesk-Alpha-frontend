type PaginationBarProps = {
	minPage?: number;
	maxPage: number;
	name: string;
	totalElements: number;
	cardinality: number;
	currentPage: number;
	onPageChange: (_value: number) => void;
	onPageInc: () => void;
	onPageDec: () => void;
};

export type { PaginationBarProps };
