import { useEffect, useState } from 'react';

const usePopup = () => {
	const [container, setContainer] = useState<HTMLElement | null>(null);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		setContainer(document.getElementById('popup-root'));

		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	return container;
};

export { usePopup };
