import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react';

import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ keyword, setKeyword }: { keyword: string; setKeyword: Dispatch<SetStateAction<string>> }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	const handleClear = () => {
		setKeyword('');
		inputRef.current?.focus();
	};

	return (
		<Box px={2} mb={1}>
			<FilledInput
				inputRef={inputRef}
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
					</InputAdornment>
				}
				endAdornment={
					keyword?.length > 0 && (
						<InputAdornment position="end">
							<IconButton sx={{ p: 0 }} onClick={handleClear} disableRipple>
								<CloseIcon fontSize="small" sx={{ color: 'text.secondary' }} />
							</IconButton>
						</InputAdornment>
					)
				}
				placeholder="Search or start a new chat"
				value={keyword}
				onChange={handleChange}
				fullWidth
				disableUnderline
				sx={{
					borderRadius: 8,
					fontWeight: 300
				}}
				slotProps={{
					input: {
						sx: {
							py: 1
						}
					}
				}}
			/>
		</Box>
	);
};

export default Searchbar;
