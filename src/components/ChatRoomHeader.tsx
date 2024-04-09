import { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ChatType } from '@/types/Chat';

interface ChatRoomHeaderProps {
  chat: ChatType;
}

const ChatRoomHeader: FC<ChatRoomHeaderProps> = ({ chat }) => {
  return (
    <AppBar position='static' sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ px: 2 }} disableGutters>
        <Avatar sx={{ mr: 1 }} alt={chat.title} src={chat.image_url} />
        <Box>
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            {chat.title}
          </Typography>
          <Typography
            variant='subtitle2'
            sx={{ color: 'grey.500', fontWeight: 300, fontSize: '0.75rem' }}
          >
            Click here for group info
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ChatRoomHeader;
