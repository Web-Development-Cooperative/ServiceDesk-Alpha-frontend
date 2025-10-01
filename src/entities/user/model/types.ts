type UserActions = 'GET_USER';
type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};
type State = {
	user: User | null;
	isLoading: boolean;
	isError: boolean;
};

const USER_ACTIONS: Record<UserActions, UserActions> = {
	GET_USER: 'GET_USER',
} as const;

export { type State, type User, USER_ACTIONS };
