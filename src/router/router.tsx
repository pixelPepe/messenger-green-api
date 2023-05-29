import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages';
import { Home } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/login', element: <Login /> },
]);
