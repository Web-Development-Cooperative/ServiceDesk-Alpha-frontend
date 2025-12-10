import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useDebounce } from '~~>shared/lib/useDebounce';

const useBranchParentsSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const parentSearch = searchParams.get('parentSearch') ?? '';

	const { debouncedValue, value, updateValue } = useDebounce(
		parentSearch,
		300
	);

	useEffect(() => {
		setSearchParams((prev) => {
			const params = Object.fromEntries(prev.entries());

			if (debouncedValue.length) {
				params.parentSearch = debouncedValue;
			} else {
				delete params.parentSearch;
			}

			params.parentPage = '1';
			return params;
		});
	}, [debouncedValue]);

	return { value, updateValue };
};

export { useBranchParentsSearch };
