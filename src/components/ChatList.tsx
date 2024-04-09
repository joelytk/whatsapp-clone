import { FC } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chat from './Chat';

import { ChatType } from '@/types/Chat';

interface ChatListProps {
  chats: ChatType[];
}

const ChatList: FC<ChatListProps> = ({ chats }) => {
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
      sx={{ p: 1, height: '100vh', width: '100%', bgcolor: 'grey.900' }}
    >
      <Stack direction='row'>
        <Typography variant='h6'>Chats</Typography>
      </Stack>
      <List>
        {chats.map((chat: ChatType) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
