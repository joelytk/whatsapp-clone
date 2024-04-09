import { useLoaderData } from 'react-router-dom';

import { ChatRoomHeader, MessageForm, MessageList } from '@/components';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { fetchChatById } from '@/services/chatsService';
import { fetchChatMessages } from '@/services/messagesService';

export const chatRoomLoader = async ({ params }) => {
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
    <Stack component='main' sx={{ height: '100vh' }}>
      <ChatRoomHeader chat={chat} />
      <Box component='section' sx={{ flex: 1 }}>
        <MessageList messages={messages} />
      </Box>
      <MessageForm />
    </Stack>
  );
};

export default ChatRoom;
