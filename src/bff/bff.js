import { getUser } from './get-user';
import { createUser } from './create-user';
import { createSession } from './create-session';

export const server = {
	async authorize(authLogin, authPassword) {

		const user = await getUser(authLogin);

		if (!user) {
			return { error: 'User not found', res: null };
		}
		if (user.password !== authPassword) {
			return { error: 'Invalid password', res: null };
		}

		return {
			error: null,
			res: createSession(user.role_id),
		}
	},
	async register(registerLogin, registerPassword) {
		const user = await getUser(registerLogin);
		if (user) {
			return { error: 'User already exists', res: null };
		}

		await createUser(registerLogin, registerPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	}
};
