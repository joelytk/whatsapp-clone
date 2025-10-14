import { useState } from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const filters = ['All', 'Unread', 'Favorites', 'Groups'];

const ChatListFilters = () => {
	const [activeFilter, setActiveFilter] = useState<string>('All');

	return (
		<Stack direction="row" spacing={1} px={2} pt={0.25} pb={1}>
			{filters.map(filter => (
				<Chip
					key={filter}
					component="button"
					variant={activeFilter === filter ? 'filled' : 'outlined'}
					label={filter}
					color={activeFilter === filter ? 'secondary' : 'default'}
					onClick={() => setActiveFilter(filter)}
				/>
			))}
		</Stack>
	);
};

export default ChatListFilters;
