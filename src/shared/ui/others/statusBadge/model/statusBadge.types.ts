import type { HTMLAttributes } from 'react';
import type { STATUS_APPLICATION } from './consts';

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
	typeBadge?: keyof typeof STATUS_APPLICATION;
};

export type { StatusBadgeProps };
