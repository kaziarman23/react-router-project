import Haeder from "./component/Header/Header.jsx"
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Haeder/>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
