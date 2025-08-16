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
import Anotherpageshow from './all component/Components/Home/AllHomes/Benner/Featured/Anotherpageshow/Anotherpageshow';
import About from './all component/Navbar/About/About';
import Store from './all component/Navbar/Store/Store';
import Challange from './all component/Navbar/Challange/Challange';
import LearningFlow from './all component/Navbar/LearningFlow/LearningFlow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/stored.json'),
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/store',
        element: <Store></Store>
      },
      {
        path: '/challange',
        element: <Challange></Challange>
      },
      {
        path: '/learning-flow',
        element: <LearningFlow></LearningFlow>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/feature/:id',
        element:<Anotherpageshow></Anotherpageshow>,
        loader: () => fetch('/stored.json'),
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
