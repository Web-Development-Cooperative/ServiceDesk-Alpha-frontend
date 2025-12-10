import type { ROLES } from '~~>shared/model/baseConsts';

type BaseObject = {
	id: string;
	name: string;
};

type Category = {
	id: string;
	name: string;
	description: string;
	priority: string;
	deadlineHours: number;
	params: {
		needApproval: boolean;
		needMedia: boolean;
	};
	active: boolean;
	createdAt: string;
	updatedAt: string;
};

type Role = keyof typeof ROLES;

export type { BaseObject, Role, Category };
