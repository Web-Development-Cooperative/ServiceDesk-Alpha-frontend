import type { FC, SVGProps } from 'react';

const SelectArrow: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="14"
			height="9"
			viewBox="0 0 14 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0.5 0.5L6.84886 7.82561C6.92861 7.91763 7.07139 7.91763 7.15114 7.82561L13.5 0.5"
				stroke="#B3B3B3"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export { SelectArrow };
