import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'jotai';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import RootLayout, { rootLoader } from '@/layouts/RootLayout';

import ChatRoom, { chatRoomLoader } from '@/pages/ChatRoom';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const darkTheme = createTheme({
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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="chats" replace />
	},
	{
		path: 'chats',
		element: <RootLayout />,
		errorElement: <NotFound />,
		loader: rootLoader,
		children: [
			{
				path: ':chatId',
				element: <ChatRoom />,
				errorElement: <NotFound />,
				loader: chatRoomLoader
				// action: chatRoomAction
			}
		]
	},
	{
		path: 'login',
		element: <Login />
	}
]);

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Provider>
				<CssBaseline />
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	);
};

export default App;
