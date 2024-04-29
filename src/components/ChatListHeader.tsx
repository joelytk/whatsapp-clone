import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const ChatListHeader = () => {
  return (
    <AppBar position='static' sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ px: 2, justifyContent: 'space-between' }} disableGutters>
        <Typography component='h1' variant='h6'>
          Chats
        </Typography>
        <Stack direction='row' spacing={1}>
          <IconButton>
            <AddCommentIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default ChatListHeader;
