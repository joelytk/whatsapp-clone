import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ImageIcon from '@mui/icons-material/Image';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { ChatType } from '@/types/Chat';

interface ChatProps {
  chat: ChatType;
}

const Chat: FC<ChatProps> = ({ chat }) => {
  const { chatId } = useParams();
  const navigate = useNavigate();

  return (
    <ListItemButton
      selected={chat.id === Number(chatId)}
      onClick={() => navigate('/chats/' + chat.id)}
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={chat.title} secondary={chat.last_message} />
    </ListItemButton>
  );
};

export default Chat;
