import { useLoaderData } from 'react-router-dom';

import { ChatList, ChatRoom } from '@/components';
import { fetchChats } from '@/services/chatsService';
import Grid from '@mui/material/Grid';

export const homeLoader = async () => {
  const chats = await fetchChats();
  return { chats };
};

const Home = () => {
  const { chats } = useLoaderData();

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid item xs={4}>
        {chats.length > 0 ? (
          <ChatList chats={chats} />
        ) : (
          <p>
            <i>No chats</i>
          </p>
        )}
      </Grid>
      <Grid item xs={8}>
        <ChatRoom />
      </Grid>
    </Grid>
  );
};

export default Home;
