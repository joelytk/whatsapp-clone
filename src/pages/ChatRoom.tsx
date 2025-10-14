import { useLoaderData } from 'react-router-dom';

import { ChatRoomHeader, MessageForm, MessageList } from '@/components';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BackgroundImage from '@/assets/images/chat-room-bg.png';

import { fetchChatById } from '@/services/chatsService';
import { fetchChatMessages } from '@/services/messagesService';

export const chatRoomLoader = async ({ params }: { params: { chatId: number } }) => {
	const chat = await fetchChatById(params.chatId);
	const messages = await fetchChatMessages(params.chatId);
	return { chat, messages };
};

// export const chatRoomAction = async ({ request, params }) => {
//   const formData = await request.formData();
//   const { message } = Object.fromEntries(formData);
//   await createMessage({ chat_id: params.chatId, user_id: 2, message });
//   return redirect(`/chats/${params.chatId}`);
// };

const ChatRoom = () => {
	const { chat, messages } = useLoaderData();

	return (
		<Stack component="main" height="100vh" position="relative" flex={2}>
			<ChatRoomHeader chat={chat} />
			<Box
				component="section"
				flex={1}
				sx={{
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundImage: `url(${BackgroundImage})`,
						opacity: 0.06,
						zIndex: -1
					}
				}}
			>
				<MessageList messages={messages} />
			</Box>
			<MessageForm />
		</Stack>
	);
};

export default ChatRoom;
