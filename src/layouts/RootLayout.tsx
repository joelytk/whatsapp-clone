import { Outlet, useLoaderData, useParams } from 'react-router-dom';

import { ChatList } from '@/components';
import { fetchChats } from '@/services/chatsService';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const rootLoader = async () => {
  const chats = await fetchChats();
  return { chats };
};

const RootLayout = () => {
  const { chats } = useLoaderData();
  const { chatId } = useParams();

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={4} lg={3}>
        <Stack direction='row'>
          <ChatList chats={chats} />
          <Divider orientation='vertical' flexItem />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={8} lg={9}>
        {chatId ? (
          <Outlet />
        ) : (
          <Stack
            justifyContent='center'
            alignItems='center'
            sx={{ width: '100%', height: '100%' }}
          >
            <Typography align='center'>
              Click on a chat to view the chat messages
            </Typography>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default RootLayout;
