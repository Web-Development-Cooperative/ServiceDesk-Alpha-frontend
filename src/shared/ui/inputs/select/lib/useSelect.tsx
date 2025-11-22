import { useEffect, useRef, useState } from 'react';

import type { SelectProps } from '../model/select.types';

const useSelect = <T extends string | number = string>(
	onChange: SelectProps<T>['onChange']
) => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => setIsOpen((cv) => !cv);
	const handleSelect = (item: SelectProps<T>['options'][number]) => {
		onChange(item);
		setIsOpen(false);
	};
	const handleClickOutside = (e: MouseEvent) => {
		if (
			isOpen &&
			containerRef.current &&
			!containerRef.current.contains(e.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [isOpen]);

	return { handleSelect, toggleDropdown, containerRef, isOpen };
};

export { useSelect };
