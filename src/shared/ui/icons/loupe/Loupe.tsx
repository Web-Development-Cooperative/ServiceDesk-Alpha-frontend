import type { FC, SVGProps } from 'react';

const Loupe: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="13"
			height="15"
			viewBox="0 0 13 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5 0C7.76142 0 10 2.23858 10 5C10 6.39363 9.42858 7.65282 8.50879 8.55957L12.248 14.168L11 15L7.29395 9.44141C6.60664 9.79711 5.82729 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0ZM5 1.5C3.067 1.5 1.5 3.067 1.5 5C1.5 6.933 3.067 8.5 5 8.5C6.933 8.5 8.5 6.933 8.5 5C8.5 3.067 6.933 1.5 5 1.5Z"
				fill="#B3B3B3"
			/>
		</svg>
	);
};

export { Loupe };
