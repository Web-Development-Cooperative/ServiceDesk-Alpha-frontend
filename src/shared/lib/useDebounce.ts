import { useState, useEffect, useCallback } from 'react';

export function useDebounce<T>(
	initialValue: T,
	delay: number
): {
	debouncedValue: T;
	value: T;
	updateValue: (newValue: T) => void;
} {
	const [value, setValue] = useState(initialValue);
	const [debouncedValue, setDebouncedValue] = useState(initialValue);

	const updateValue = useCallback((newValue: T) => {
		setValue(newValue);
	}, []);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return { debouncedValue, value, updateValue };
}
