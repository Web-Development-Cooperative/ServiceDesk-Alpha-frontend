import { useState } from 'react';

import type { Option } from '~~>shared/ui/inputs';

const useBranchesControls = () => {
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState<Option<string>>();

	const onChangeSort = (value: Option) => setSort(value);

	return { search, setSearch, sort, onChangeSort };
};

export { useBranchesControls };
