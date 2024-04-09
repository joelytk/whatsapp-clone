import { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Message from './Message';

import { MessageType } from '@/types/Message';

interface MessageListProps {
  messages: MessageType[];
}

const MessageList: FC<MessageListProps> = ({ messages }) => {
  if (!messages.length) {
    return (
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <Typography>No messages</Typography>
      </Stack>
    );
  }

  return (
    <Stack p={2}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </Stack>
  );
};

export default MessageList;
