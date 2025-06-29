import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Layout from "./pages/layout/Layout.jsx";
import Subsystems from "./pages/subsystems/Subsystems.jsx";
import Team from "./pages/team/Team.jsx";
import Media from "./pages/media/Media.jsx";
import Support from "./pages/support/Support.jsx";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <Home/>
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
        path: "/media",
        element: <Media/>
      },
      {
        path: "/support",
        element: <Support/>
      },
      {
        path: "/sponsors",
        element: <Sponsors/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      }
      
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<RouterProvider router={router} />);
