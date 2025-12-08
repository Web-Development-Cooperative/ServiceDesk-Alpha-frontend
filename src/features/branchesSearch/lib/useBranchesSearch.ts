import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useDebounce } from '~~>shared/lib/useDebounce';

const useBranchesSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const search = searchParams.get('search') ?? '';

	const { debouncedValue, value, updateValue } = useDebounce(search, 300);

	useEffect(() => {
		setSearchParams((prev) => {
			const params = Object.fromEntries(prev.entries());

			if (debouncedValue.length) {
				params.search = debouncedValue;
			} else {
				delete params.search;
			}

			params.page = '1';
			return params;
		});
	}, [debouncedValue]);

	return { value, updateValue };
};

export { useBranchesSearch };
