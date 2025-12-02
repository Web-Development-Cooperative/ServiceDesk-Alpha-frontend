import type { ROLES } from '~~>shared/model/baseConsts';

type BaseObject = {
	id: string;
	name: string;
};

type Role = keyof typeof ROLES;

export type { BaseObject, Role };
