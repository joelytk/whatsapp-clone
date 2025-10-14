import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

import EmojiPicker from './EmojiPicker';
import FileMenu from './FileMenu';

import { createMessage } from '@/services/messagesService';

const MessageForm = () => {
	const { chatId } = useParams();
	const navigate = useNavigate();
	const [message, setMessage] = useState('');

	const addEmojiToMessage = (emoji: string) => {
		setMessage(message => (message += emoji));
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createMessage({
			chat_id: Number(chatId),
			user_id: 2,
			message
		});
		setMessage('');
		navigate(`/chats/${chatId}`);
	};

	return (
		<Stack
			component="form"
			method="post"
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={0.75}
			onSubmit={handleSubmit}
			minHeight={52}
			p={0.75}
			bgcolor="grey.900"
			m={1.5}
			mt={0}
			borderRadius={6}
		>
			<Stack direction="row">
				<FileMenu />
				<EmojiPicker addEmojiToMessage={addEmojiToMessage} />
			</Stack>
			<Input
				placeholder="Type a message"
				autoFocus
				multiline
				disableUnderline
				maxRows={5}
				value={message}
				onChange={handleChange}
				sx={{
					p: 0,
					flex: 1,
					borderRadius: 2
				}}
				slotProps={{
					input: {
						sx: {
							p: 0
						}
					}
				}}
			/>
			<Tooltip title="Send">
				<IconButton
					type="submit"
					sx={{
						width: 40,
						height: 40,
						color: 'black',
						bgcolor: 'primary.main',
						transition: 'transform 50ms',
						'&:hover': {
							bgcolor: 'primary.main',
							transform: 'scale(1.05)'
						}
					}}
				>
					<SendIcon />
				</IconButton>
			</Tooltip>
		</Stack>
	);
};

export default MessageForm;
