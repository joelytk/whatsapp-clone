import { FC, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chat from './Chat';
import ChatListHeader from './ChatListHeader';
import SearchBar from './SearchBar';

import { ChatType } from '@/types/Chat';

interface ChatListProps {
  chats: ChatType[];
}

const ChatList: FC<ChatListProps> = ({ chats }) => {
  const [keyword, setKeyword] = useState('');

  const filteredChats = useMemo(
    () =>
      chats.filter(chat =>
        chat.title?.toLowerCase()?.includes(keyword.toLowerCase())
      ),
    [keyword]
  );

  return (
    <Box
      component='aside'
      sx={{ height: '100vh', width: '100%', bgcolor: 'grey.900' }}
    >
      <ChatListHeader />
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      {filteredChats.length > 0 ? (
        <List disablePadding>
          {chats.map((chat: ChatType) => (
            <Chat key={chat.id} chat={chat} />
          ))}
        </List>
      ) : (
        <Stack p={1} alignItems='center'>
          <Typography variant='body2' sx={{ opacity: 0.75 }}>
            No chats found
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default ChatList;
