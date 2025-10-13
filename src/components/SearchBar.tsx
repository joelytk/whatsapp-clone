import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ keyword, setKeyword }: { keyword: string; setKeyword: (keyword: string) => void }) => {
	return (
		<Box px={2} mb={1}>
			<OutlinedInput
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
					</InputAdornment>
				}
				endAdornment={
					keyword?.length > 0 && (
						<InputAdornment position="end">
							<IconButton sx={{ p: 0 }} onClick={() => setKeyword('')} disableRipple>
								<CloseIcon fontSize="small" sx={{ color: 'text.secondary' }} />
							</IconButton>
						</InputAdornment>
					)
				}
				placeholder="Search or start a new chat"
				value={keyword}
				onChange={e => setKeyword(e.target.value)}
				fullWidth
				sx={{
					borderRadius: 8,
					'& .MuiOutlinedInput-input': {
						py: 1
					},
					fontWeight: 300
				}}
			/>
		</Box>
	);
};

export default Searchbar;
