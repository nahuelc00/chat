import {useEffect, useState} from 'react';
import {type Messages} from '../types/messages';
import {onValue, ref} from 'firebase/database';
import {rtdb} from '../services/firebase/rtdb';
import {mapMessagesFromDb} from '../mappers/map-messages-from-db';

function useMessages() {
	const [messages, setMessages] = useState<Messages>([]);
	const [isLoading, setIsLoading] = useState<boolean>();

	useEffect(() => {
		const messagesRef = ref(rtdb, 'messages/');

		setIsLoading(true);

		onValue(messagesRef, snapshot => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const messagesData = snapshot.val();
			const messagesMapped = mapMessagesFromDb(messagesData);

			setMessages(messagesMapped);
			setIsLoading(false);
		});
	}, [ref, onValue]);

	return {messages, isLoading};
}

export {useMessages};

