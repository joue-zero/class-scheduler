import {Outlet} from "react-router-dom";
import Nav from "../components/Nav.jsx";

const MainLayout = () => {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;