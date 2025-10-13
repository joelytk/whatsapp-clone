import { useAtom } from 'jotai';
import type { ReactNode } from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { navItemAtom } from '@/atoms/navItemAtom';

const NavItem = ({ title, icons }: { title: string; icons: { active: ReactNode; inactive: ReactNode } }) => {
	const [activeNavItem, setActiveNavItem] = useAtom(navItemAtom);

	return (
		<Tooltip title={title} placement="right">
			<IconButton
				onClick={() => setActiveNavItem(title)}
				sx={{
					bgcolor: activeNavItem === title ? 'action.hover' : 'transparent'
				}}
			>
				{activeNavItem === title ? icons.active : icons.inactive}
			</IconButton>
		</Tooltip>
	);
};

const Navbar = () => {
	return (
		<AppBar position="static" sx={{ boxShadow: 'none', width: 64 }}>
			<Toolbar
				sx={{
					px: 1.5,
					py: 1.25,
					height: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					bgcolor: 'grey.900',
					borderRight: 1,
					borderRightColor: 'divider'
				}}
				disableGutters
			>
				<Stack spacing={0.5}>
					<NavItem title="Chats" icons={{ active: <ChatIcon />, inactive: <ChatOutlinedIcon /> }} />
					<NavItem
						title="Status"
						icons={{
							active: <DonutSmallIcon />,
							inactive: <DonutSmallOutlinedIcon />
						}}
					/>
					<NavItem
						title="Channels"
						icons={{
							active: <BubbleChartIcon />,
							inactive: <BubbleChartOutlinedIcon />
						}}
					/>
					<NavItem title="Communities" icons={{ active: <GroupsIcon />, inactive: <GroupsOutlinedIcon /> }} />
				</Stack>
				<Stack spacing={0.5}>
					<NavItem
						title="Settings"
						icons={{
							active: <SettingsIcon />,
							inactive: <SettingsOutlinedIcon />
						}}
					/>
					<NavItem
						title="Profile"
						icons={{
							active: <Avatar sx={{ width: 28, height: 28 }} />,
							inactive: <Avatar sx={{ width: 28, height: 28 }} />
						}}
					/>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
