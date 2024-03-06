import {initializeApp} from 'firebase/app';
import {
	getDatabase, ref, set,
} from 'firebase/database';
import {firebaseConfig} from './config';

const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

async function sendMessage(username: string, message: string) {
	await set(ref(rtdb, 'messages/' + crypto.randomUUID()), {
		username,
		message,
	});
}

export {rtdb, sendMessage};
