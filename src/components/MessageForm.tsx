import { useNavigate, useParams } from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { createMessage } from '@/services/messagesService';

const MessageForm = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    createMessage({
      chat_id: Number(chatId),
      user_id: 2,
      message: e.target.message.value
    });
    e.target.reset();
    navigate(`/chats/${chatId}`);
  };

  return (
    <Stack
      component='form'
      method='post'
      direction='row'
      justifyContent='center'
      gap={2}
      sx={{ minHeight: 60, px: 2, py: 1, bgcolor: 'grey.900' }}
      onSubmit={handleSubmit}
    >
      <FilledInput
        name='message'
        autoFocus
        disableUnderline
        placeholder='Type a message'
        multiline
        maxRows={5}
        sx={{
          p: 0,
          flex: 1,
          borderRadius: 2,
          '& .MuiFilledInput-input': {
            px: 1.5,
            py: 1
          }
        }}
      />
      <IconButton type='submit' sx={{ height: 40 }}>
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

export default MessageForm;
