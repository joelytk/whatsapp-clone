import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Input from './Input';

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <Box p={1}>
      <Input
        type='search'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
        placeholder='Search'
        value={keyword}
        onChange={setKeyword}
      />
    </Box>
  );
};

export default SearchBar;
