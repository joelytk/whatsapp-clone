import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Chat from './Chat';
import ChatListFilters from './ChatListFilters';
import ChatListHeader from './ChatListHeader';
import SearchBar from './SearchBar';

import { ChatType } from '@/types/Chat';

const ChatList = ({ chats }: { chats: ChatType[] }) => {
	const [keyword, setKeyword] = useState('');

	const filteredChats = useMemo(
		() => chats?.filter(chat => chat.title?.toLowerCase()?.includes(keyword.toLowerCase())),
		[keyword]
	);

	return (
		<Box component="aside" sx={{ height: '100vh', width: '100%' }}>
			<ChatListHeader />
			<SearchBar keyword={keyword} setKeyword={setKeyword} />
			<ChatListFilters />
			{filteredChats?.length > 0 ? (
				<List disablePadding>
					{chats.map((chat: ChatType) => (
						<Chat key={chat.id} chat={chat} />
					))}
				</List>
			) : (
				<Stack py={9} px={6} alignItems="center">
					<Typography variant="body2" textAlign="center" fontWeight={300} sx={{ opacity: 0.75 }}>
						No chats, contacts or messages found
					</Typography>
				</Stack>
			)}
		</Box>
	);
};

export default ChatList;
