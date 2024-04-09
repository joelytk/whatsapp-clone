import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FilledInput from '@mui/material/FilledInput';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

const ChatRoom = () => {
  return (
    <Stack component='main' sx={{ height: '100vh' }}>
      <AppBar position='static'>
        <Toolbar variant='dense' sx={{ px: 1 }}>
          <Avatar>JY</Avatar>
        </Toolbar>
      </AppBar>
      <Box component='section' style={{ flex: 1 }}>
        Room
      </Box>
      <Divider />
      <Stack component='form' sx={{ height: 48, bgcolor: 'grey.900' }}>
        <FilledInput
          disableUnderline
          defaultValue='Hello world'
          inputProps={{ style: { padding: 4 } }}
          // sx={{ p: 0 }}
        />
      </Stack>
    </Stack>
  );
};

export default ChatRoom;
