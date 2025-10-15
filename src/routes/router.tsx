import { createBrowserRouter } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import RootLayout, { rootLoader } from '@/layouts/RootLayout';
import ChatRoom, { chatRoomLoader } from '@/pages/ChatRoom';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
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
