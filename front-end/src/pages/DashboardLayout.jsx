import { Outlet } from "react-router-dom";
import HeaderCompAuth from '../components/authComponents/HeaderCompAuth';
import FooterComp from "../components/FooterComp";

export default function DashboardLayout() {
    return (
        <>
            <div className="h-screen flex flex-col justify-between">
                <HeaderCompAuth></HeaderCompAuth>
                <Outlet></Outlet>
                <FooterComp></FooterComp>
            </div>
        </>
    )
}