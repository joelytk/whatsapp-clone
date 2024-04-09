import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

import Home, { homeLoader } from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='chats' replace />
  },
  {
    path: '/chats/:chatId',
    element: <Home />,
    errorElement: <NotFound />,
    loader: homeLoader
  },
  {
    path: 'login',
    element: <Login />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
