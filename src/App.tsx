import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

import Home, { homeLoader } from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='chats' replace />
  },
  {
    path: '/chats',
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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
