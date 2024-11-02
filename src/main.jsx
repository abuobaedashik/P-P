import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './NavBar/Navbar.jsx';
import Home from './assets/Home/Home.jsx';
import SaveFood from './SaveFood/SaveFood.jsx';
import Itzone from './assets/Itzone/Itzone.jsx';
import Handicrafts from './assets/Handicraft/Handicrafts.jsx';
import Consultancy from './assets/consultancy/Consultancy.jsx';
import Contact from './assets/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Itzone></Itzone>
      },
      {
        path:"/savefood",
        loader:({params})=>fetch("data.json"),
        element:<SaveFood></SaveFood>
      },
      {
        path:"/handicrafts",
        element:<Handicrafts></Handicrafts> 
      },
      {
        path:"/consultancy",
        element:<Consultancy></Consultancy> 
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
