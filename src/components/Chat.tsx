import { useNavigate, useParams } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { ChatType } from '@/types/Chat';

const Chat = ({ chat }: { chat: ChatType }) => {
	const navigate = useNavigate();
	const { chatId } = useParams();

	return (
		<ListItemButton
			selected={chat.id === Number(chatId)}
			onClick={() => navigate('/chats/' + chat.id)}
			sx={{
				bgcolor: chat.id === Number(chatId) ? 'action.hover' : 'transparent'
			}}
		>
			<ListItemAvatar>
				<Avatar alt={chat.title} src={chat.image_url} />
			</ListItemAvatar>
			<ListItemText primary={chat.title} secondary={chat.last_message} />
		</ListItemButton>
	);
};

export default Chat;
