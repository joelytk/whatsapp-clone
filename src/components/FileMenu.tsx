import { MouseEvent, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

import AddIcon from '@mui/icons-material/Add';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import EventIcon from '@mui/icons-material/Event';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const fileMenuItems = [
	{
		icon: <InsertDriveFileIcon fontSize="small" />,
		label: 'Document'
	},
	{
		icon: <PhotoLibraryIcon fontSize="small" />,
		label: 'Photos & videos'
	},
	{
		icon: <PhotoCameraIcon fontSize="small" />,
		label: 'Camera'
	},
	{
		icon: <HeadphonesIcon fontSize="small" />,
		label: 'Audio'
	},
	{
		icon: <HeadphonesIcon fontSize="small" />,
		label: 'Contact'
	},
	{
		icon: <AlignHorizontalLeftIcon fontSize="small" />,
		label: 'Poll'
	},
	{
		icon: <EventIcon fontSize="small" />,
		label: 'Event'
	},
	{
		icon: <StickyNote2Icon fontSize="small" />,
		label: 'New sticker'
	}
];

const FileMenu = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title="Attach">
				<IconButton type="button" sx={{ width: 40, height: 40 }} onClick={handleOpen}>
					<AddIcon />
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{
					horizontal: 'center',
					vertical: 'top'
				}}
				transformOrigin={{
					horizontal: 'center',
					vertical: 'bottom'
				}}
				open={open}
				onClose={handleClose}
			>
				{fileMenuItems.map(item => (
					<MenuItem key={item.label} onClick={handleClose}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						{item.label}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default FileMenu;
