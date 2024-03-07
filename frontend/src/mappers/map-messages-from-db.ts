import {type Message, type Messages} from '../types/messages';

function organizeMessagesFromOldestToNewest(messagesDataMapped: Messages) {
	messagesDataMapped.sort((a, b) => a.created - b.created);
}

function mapMessagesFromDb(messages: any): Messages {
	const messagesDataMapped: Messages = [];

	// eslint-disable-next-line guard-for-in
	for (const key in messages) {
		const messageData = messages[key] as Record<string, string>;
		const dataToSet: Message = {
			id: key,
			username: messageData.username,
			message: messageData.message,
			created: new Date(messageData.created).getTime(),
		};
		messagesDataMapped.push(dataToSet);
	}

	organizeMessagesFromOldestToNewest(messagesDataMapped);

	return messagesDataMapped;
}

export {mapMessagesFromDb};
