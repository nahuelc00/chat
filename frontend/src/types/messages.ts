type Message = {
	id: string;
	username: string;
	message: string;
	created: number;
};

type Messages = Message[];

export type {Message, Messages};
