import {Outlet} from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};



export default MainLayout;