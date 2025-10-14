import type { ReactNode } from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

import type { ChatType } from '@/types/Chat';

const HeaderIconButton = ({ icon, title }: { icon: ReactNode; title: string }) => {
	return (
		<Tooltip title={title}>
			<IconButton sx={{ width: 40, height: 40 }}>{icon}</IconButton>
		</Tooltip>
	);
};

const ChatRoomHeader = ({ chat }: { chat: ChatType }) => {
	return (
		<AppBar position="static" sx={{ boxShadow: 'none' }}>
			<Toolbar
				disableGutters
				sx={{
					px: 2,
					justifyContent: 'space-between',
					bgcolor: 'background.paper'
				}}
			>
				<Stack direction="row" alignItems="center" spacing={2}>
					<Avatar src={chat.image_url} />
					<Box>
						<Typography variant="subtitle1" fontWeight={500}>
							{chat.title}
						</Typography>
						<Typography variant="subtitle2" color="textSecondary" fontWeight={300} fontSize="0.75rem">
							Click here for contact info
						</Typography>
					</Box>
				</Stack>
				<Stack direction="row" alignItems="center" spacing={1}>
					<HeaderIconButton icon={<VideocamOutlinedIcon />} title="Video Call" />
					<HeaderIconButton icon={<SearchIcon />} title="Search" />
					<HeaderIconButton icon={<MoreVertIcon />} title="Menu" />
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default ChatRoomHeader;
