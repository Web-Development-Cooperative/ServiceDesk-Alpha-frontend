import type { FC, SVGProps } from 'react';

const Plus: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="11"
			height="11"
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M6 5H11V6H6V11H5V6H0V5H5V0H6V5Z" fill="white" />
		</svg>
	);
};

export { Plus };
