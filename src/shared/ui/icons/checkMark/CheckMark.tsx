import type { FC, SVGProps } from 'react';

const CheckMark: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="15"
			height="12"
			viewBox="0 0 15 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1 6L4.9264 10.908C4.96495 10.9562 5.03753 10.9583 5.07882 10.9124L14 1"
				stroke="#156CC6"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export { CheckMark };
