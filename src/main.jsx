import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Layout from "./pages/layout/Layout.jsx";
import Subsystems from "./pages/subsystems/Subsystems.jsx";
import Team from "./pages/team/Team.jsx";
import Media from "./pages/media/Media.jsx";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import Cars from "./pages/cars/Cars.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        // old /home links go to the root
        path: "/home",
        element: <Navigate to="/" replace/>
      },
      {
        // old name for the subsystems page
        path: "/subteams",
        element: <Navigate to="/subsystems" replace/>
      },
      {
        path: "/subsystems",
        element: <Subsystems/>
      },
      {
        path: "/team",
        element: <Team/>
      },
      {
        path: "/cars",
        element: <Cars/>
      },
      {
        path: "/media",
        element: <Media/>
      },
      {
        path: "/sponsors",
        element: <Sponsors/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<RouterProvider router={router} />);
