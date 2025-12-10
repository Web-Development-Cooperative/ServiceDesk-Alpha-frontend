import type { HTMLAttributes } from 'react';
import type { TYPE_BACKGROUD } from './consts';

type BrightBackgroundProps = HTMLAttributes<HTMLSpanElement> & {
	typeBG?: keyof typeof TYPE_BACKGROUD;
};

export type { BrightBackgroundProps };
