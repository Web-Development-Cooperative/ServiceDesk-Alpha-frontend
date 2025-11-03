type User = {
	id: string;
	name: string;
	username: string;
	email: string;
};
type TokenDecode = {
	sub: string;
	email_verified: boolean;
	name: string;
	preferred_username: string;
	given_name: string;
	family_name: string;
	email: string;
};
type State = {
	user: User | null;
};

export { type State, type User, type TokenDecode };
