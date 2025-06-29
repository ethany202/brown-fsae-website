import { Outlet } from "react-router-dom";
import PageBase from "../../components/base/PageBase.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";


export default function Layout(){
    return (
        <PageBase>
            <Navbar/>
            <div className="flex items-center justify-center w-full pt-20 flex-col">
                <Outlet/>
            </div>
            <Footer/>
        </PageBase>
    )
}