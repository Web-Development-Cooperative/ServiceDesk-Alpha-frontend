const ROLES = {
	ROLE_ADMIN: 'ROLE_ADMIN',
	ROLE_USER: 'ROLE_USER',
} as const;

const PRIORITY = {
	LOW: 'LOW',
	NORMAL: 'NORMAL',
	HIGH: 'HIGH',
	CRITICAL: 'CRITICAL',
} as const;

export { ROLES, PRIORITY };
