import { Outlet, useLoaderData, useParams } from 'react-router-dom';

import { ChatList, Navbar } from '@/components';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fetchChats } from '@/services/chatsService';
import { getUser } from '@/services/userService';

export const rootLoader = async () => {
	const { data: user } = await getUser();
	const chats = await fetchChats();

	return { user, chats };
};

const RootLayout = () => {
	const { chats } = useLoaderData();
	const { chatId } = useParams();

	return (
		<Stack direction="row" height="100vh">
			<Navbar />
			<Divider orientation="vertical" flexItem />
			<ChatList chats={chats} />
			<Divider orientation="vertical" flexItem />
			{chatId ? (
				<Outlet />
			) : (
				<Stack justifyContent="center" alignItems="center" width="100%" height="100%" flex={2}>
					<Typography align="center">Click on a chat to view the chat messages</Typography>
				</Stack>
			)}
		</Stack>
	);
};

export default RootLayout;
