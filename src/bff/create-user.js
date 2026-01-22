import { generateDate } from './generate-date';

export const createUser = (login, password) => fetch(`http://localhost:3001/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			login,
			password,
			name: null,
			registered_at: generateDate(),
			role_id: 2,
		})
	});
