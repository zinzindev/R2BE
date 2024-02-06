'use client';

import { useEffect, useState } from 'react';
import { submitForm } from './action';

export default function Page() {
	const [userState, setUserState] = useState([]);

	useEffect(() => {
		const initUsers = async () => {
			try {
				const users = await getUsers();
				setUserState(users);
			} catch (error) {
				console.error(error);
			}
		};

		initUsers();
	}, []);

	return (
		<div>
			<ul>
				{userState.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			<form action={submitForm}>
				id: <input type='text' name='id' />
				name: <input type='text' name='name' />
				email: <input type='text' name='email' />
				<button>Submit</button>
			</form>
		</div>
	);
}
