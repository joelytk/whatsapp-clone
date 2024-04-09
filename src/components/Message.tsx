import { FC } from 'react';

import { MessageType } from '@/types/Message';
// import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface MessageProps {
  message: MessageType;
}

const Message: FC<MessageProps> = ({ message }) => {
  const isCurrentUser = message.user_id === 2;

  return (
    <Stack
      direction='row'
      justifyContent={isCurrentUser ? 'flex-end' : 'flex-start'}
    >
      {/* <Avatar
        src='/broken-image.jpg'
        alt={message.name}
        sx={{ width: 28, height: 28 }}
      /> */}
      <Box
        sx={{
          p: 1,
          mb: 1,
          borderRadius: 2,
          bgcolor: isCurrentUser ? 'primary.dark' : 'grey.800'
        }}
      >
        {/* <p>{message.name}</p> */}
        <Typography sx={{ fontSize: '0.8rem' }}>{message.message}</Typography>
      </Box>
    </Stack>
  );
};

export default Message;
