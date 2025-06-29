import { Outlet } from "react-router-dom";
import PageBase from "../../components/base/PageBase";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


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