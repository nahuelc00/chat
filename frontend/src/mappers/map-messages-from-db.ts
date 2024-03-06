import {type Message, type Messages} from '../types/messages';

function mapMessagesFromDb(messages: any): Messages {
	const messagesDataMapped: Messages = [];

	// eslint-disable-next-line guard-for-in
	for (const key in messages) {
		const messageData = messages[key] as Record<string, string>;
		const dataToSet: Message = {
			id: key,
			username: messageData.username,
			message: messageData.message,
		};
		messagesDataMapped.push(dataToSet);
	}

	return messagesDataMapped;
}

export {mapMessagesFromDb};
