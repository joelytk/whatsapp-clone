import Stack from '@mui/material/Stack';

import Message from './Message';

import { MessageType } from '@/types/Message';

const MessageList = ({ messages }: { messages: MessageType[] }) => {
	return (
		<Stack p={2}>
			{messages?.map(message => (
				<Message key={message.id} message={message} />
			))}
		</Stack>
	);
};

export default MessageList;
