import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../NavBar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className="min-h-screen">
              <Outlet></Outlet>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Home;