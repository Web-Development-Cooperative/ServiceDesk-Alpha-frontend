import type { FC, SVGProps } from 'react';

const PopupCross: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="13"
			height="13"
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12.7275 1.41406L7.77734 6.36328L12.7275 11.3135L11.3135 12.7285L6.36328 7.77832L1.41406 12.7285L0 11.3145L4.94922 6.36426L0 1.41406L1.41406 0L6.36328 4.94922L11.3135 0L12.7275 1.41406Z"
				fill="#6C7684"
			/>
		</svg>
	);
};

export { PopupCross };
