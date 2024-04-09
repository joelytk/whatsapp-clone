import { useNavigate, useParams } from 'react-router-dom';

import ImageIcon from '@mui/icons-material/Image';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Chat = ({ chat }) => {
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

const ChatList = ({ chats }) => {
  return (
    <aside>
      <List sx={{ borderRight: '1px solid #000' }} disablePadding>
        {chats.map(chat => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </List>
    </aside>
  );
};

export default ChatList;
