import { FC } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Chat from './Chat';
import ChatListHeader from './ChatListHeader';

import { ChatType } from '@/types/Chat';
import { UserType } from '@/types/User';

interface ChatListProps {
  user: UserType;
  chats: ChatType[];
}

const ChatList: FC<ChatListProps> = ({ user, chats }) => {
  if (!chats.length) {
    return (
      <Typography>
        <em>No chats</em>
      </Typography>
    );
  }

  return (
    <Box
      component='aside'
      sx={{ height: '100vh', width: '100%', bgcolor: 'grey.900' }}
    >
      <ChatListHeader user={user} />
      <List disablePadding>
        {chats.map((chat: ChatType) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
