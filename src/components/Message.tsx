import { MessageType } from '@/types/Message';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Message = ({ message }: { message: MessageType }) => {
	const isCurrentUser = message.user_id === 2;

	return (
		<Stack direction="row" justifyContent={isCurrentUser ? 'flex-end' : 'flex-start'}>
			<Box
				sx={{
					px: 1,
					py: 0.5,
					mb: 1,
					borderRadius: 1.5,
					bgcolor: isCurrentUser ? 'success.dark' : 'grey.800'
				}}
			>
				<Typography sx={{ fontSize: '0.95rem' }}>{message.message}</Typography>
			</Box>
		</Stack>
	);
};

export default Message;
