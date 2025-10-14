import { useNavigate, useParams } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { ChatType } from '@/types/Chat';

const Chat = ({ chat }: { chat: ChatType }) => {
	const navigate = useNavigate();
	const { chatId } = useParams();

	return (
		<ListItem sx={{ py: 0, pb: 0.5 }}>
			<ListItemButton
				onClick={() => navigate('/chats/' + chat.id)}
				sx={{
					borderRadius: 3,
					bgcolor: chat.id === Number(chatId) ? 'action.selected' : 'transparent',
					'&:hover': {
						bgcolor: 'action.hover'
					}
				}}
			>
				<ListItemAvatar>
					<Avatar src={chat.image_url} />
				</ListItemAvatar>
				<ListItemText primary={chat.title} secondary={chat.last_message} />
			</ListItemButton>
		</ListItem>
	);
};

export default Chat;
