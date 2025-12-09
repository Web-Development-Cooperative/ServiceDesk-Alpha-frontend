import type { FC, SVGProps } from 'react';

const Email: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="24"
			height="18"
			viewBox="0 0 24 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1 1.82051V1.2C1 1.08954 1.08954 1 1.2 1H22.8C22.9105 1 23 1.08954 23 1.2V2.23077M1 1.82051V16.8C1 16.9105 1.08954 17 1.2 17H22.8C22.9105 17 23 16.9105 23 16.8V2.23077M1 1.82051L11.9469 8.96535C11.9793 8.98651 12.021 8.98706 12.054 8.96678L23 2.23077"
				stroke="#6C7684"
				strokeWidth="2"
			/>
		</svg>
	);
};

export { Email };
