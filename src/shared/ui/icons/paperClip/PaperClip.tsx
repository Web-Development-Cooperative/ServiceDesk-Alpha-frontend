import type { FC, SVGProps } from 'react';

const PaperClip: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="12"
			height="13"
			viewBox="0 0 12 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.8738 6.20146L8.64624 8.59573L6.37305 10.7848C3.86294 13.3985 -1.12631 10.3265 1.0255 7.50999C3.40137 4.40024 5.95474 2.11697 6.87019 1.36961C9.37297 -0.673596 12.5916 1.24616 10.7665 3.41641C8.64624 5.93766 6.81404 8.23117 4.92202 9.55679C4.16723 10.0856 2.0004 9.55659 3.46152 7.85093C4.58216 6.54275 6.35458 4.71943 8.64624 2.51943"
				stroke="#6C7684"
				stroke-linecap="round"
			/>
		</svg>
	);
};

export { PaperClip };
