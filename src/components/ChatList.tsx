import { useMemo, useState } from 'react';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Chat from './Chat';
import ChatListFilters from './ChatListFilters';
import ChatListHeader from './ChatListHeader';
import Searchbar from './Searchbar';

import type { ChatType } from '@/types/Chat';

const ChatList = ({ chats }: { chats: ChatType[] }) => {
	const [keyword, setKeyword] = useState('');

	const filteredChats = useMemo(
		() => chats?.filter(chat => chat.title?.toLowerCase()?.includes(keyword.toLowerCase())),
		[chats, keyword]
	);

	return (
		<Stack component="aside" height="100vh" width="100%" flex={1}>
			<ChatListHeader />
			<Searchbar keyword={keyword} setKeyword={setKeyword} />
			<ChatListFilters />
			{filteredChats?.length > 0 ? (
				<List
					disablePadding
					sx={{
						flex: 1,
						overflowY: 'auto'
					}}
				>
					{chats.map((chat: ChatType) => (
						<Chat key={chat.id} chat={chat} />
					))}
				</List>
			) : (
				<Stack py={9} px={6} alignItems="center">
					<Typography variant="body2" textAlign="center" fontWeight={300} color="textSecondary">
						No chats, contacts or messages found
					</Typography>
				</Stack>
			)}
		</Stack>
	);
};

export default ChatList;
