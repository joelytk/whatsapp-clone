import { useLoaderData } from 'react-router-dom';

import { ChatList, ChatRoom } from '@/components';
import { fetchChats } from '@/services/chatsService';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export const homeLoader = async () => {
  const chats = await fetchChats();
  return { chats };
};

const Home = () => {
  const { chats } = useLoaderData();

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid item xs={4}>
        <Stack direction='row'>
          <ChatList chats={chats} />
          <Divider orientation='vertical' flexItem />
        </Stack>
      </Grid>

      <Grid item xs={8}>
        <ChatRoom />
      </Grid>
    </Grid>
  );
};

export default Home;
