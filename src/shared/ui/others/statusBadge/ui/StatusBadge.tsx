import { BrightBackground } from '~~>shared/ui/others';

import { STATUS_APPLICATION } from '../model/consts';
import type { FC } from 'react';
import type { StatusBadgeProps } from '../model/statusBadge.types';

const StatusBadge: FC<StatusBadgeProps> = ({
	className = '',
	typeBadge = 'primary',
}) => {
	return (
		<BrightBackground className={className} typeBG={typeBadge}>
			{STATUS_APPLICATION[typeBadge]}
		</BrightBackground>
	);
};

export { StatusBadge };
