import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './all component/Root/Root';
import Errorelement from './all component/Components/Home/Errorelement/Errorelement';
import Home from './all component/Components/Home/Home';
import Register from './all component/Components/Home/Firebase/Authincation/Register/Register';
import Authincation from './all component/Components/Home/Firebase/Authincation/Authincation';
import Login from './all component/Components/Home/Firebase/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authincation>
      <RouterProvider router={router} />
    </Authincation>
  </StrictMode>,
)
