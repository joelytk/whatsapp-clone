import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EmojiPicker from './EmojiPicker';
import FileMenu from './FileMenu';
import Input from './Input';

import { createMessage } from '@/services/messagesService';

const MessageForm = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const addEmojiToMessage = emoji => {
    setMessage(message => (message += emoji));
  };

  const handleSubmit = e => {
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
      component='form'
      method='post'
      direction='row'
      justifyContent='center'
      gap={1}
      sx={{ minHeight: 60, px: 1, py: 1, bgcolor: 'grey.900' }}
      onSubmit={handleSubmit}
    >
      <EmojiPicker addEmojiToMessage={addEmojiToMessage} />
      <FileMenu />
      <Input
        style={{
          p: 0,
          flex: 1,
          borderRadius: 2,
          '& .MuiFilledInput-input': {
            px: 1.5,
            py: 1
          }
        }}
        name='message'
        placeholder='Type a message'
        autoFocus
        multiline
        value={message}
        onChange={setMessage}
        maxRows={5}
      />
      <IconButton type='submit' sx={{ height: 40 }}>
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

export default MessageForm;
