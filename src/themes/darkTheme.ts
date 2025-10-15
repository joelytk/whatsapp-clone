import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#21C063'
		},
		secondary: {
			main: '#103529',
			contrastText: '#D9FDD3'
		}
	}
});
