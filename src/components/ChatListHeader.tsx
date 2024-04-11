import { FC } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { UserType } from '@/types/User';

interface ChatListHeaderProps {
  user: UserType;
}

const ChatListHeader: FC<ChatListHeaderProps> = ({ user }) => {
  return (
    <AppBar position='static' sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ px: 2, justifyContent: 'space-between' }} disableGutters>
        <Avatar sx={{ mr: 2 }} alt={user?.name} src={user?.image_url} />
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ChatListHeader;
