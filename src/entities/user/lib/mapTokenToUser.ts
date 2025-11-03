import type { TokenDecode, User } from '../model/types';

const mapTokenToUser = (token: TokenDecode): User => ({
	id: token.sub,
	name: token.name || `${token.given_name} ${token.family_name}`,
	username: token.preferred_username,
	email: token.email,
});

export { mapTokenToUser };
