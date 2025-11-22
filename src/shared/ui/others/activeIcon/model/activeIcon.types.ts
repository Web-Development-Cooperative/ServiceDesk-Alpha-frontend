import type { HTMLAttributes, PropsWithChildren } from 'react';

type ActiveIconProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
	typeActive?: 'danger' | 'primary';
};

export type { ActiveIconProps };
