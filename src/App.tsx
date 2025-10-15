import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'jotai';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from '@/contexts/AuthContext';
import { SnackbarProvider } from '@/contexts/SnackbarContext';
import { router } from '@/routes/router';
import { darkTheme } from '@/themes/darkTheme';

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<SnackbarProvider>
				<AuthProvider>
					<Provider>
						<CssBaseline enableColorScheme />
						<RouterProvider router={router} />
					</Provider>
				</AuthProvider>
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
