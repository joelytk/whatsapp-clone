import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        type='button'
        color={open ? 'primary' : 'inherit'}
        sx={{ height: 40 }}
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <AddIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <InsertDriveFileIcon fontSize='small' />
          </ListItemIcon>
          Document
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <InsertPhotoIcon fontSize='small' />
          </ListItemIcon>
          Photos & videos
        </MenuItem>
      </Menu>
    </>
  );
};

export default FileMenu;
