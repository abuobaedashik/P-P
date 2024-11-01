import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="bg-red-700 mx-auto rounded-[30px] py-6 px-3">
        <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-5">
          <p className="text-base text-[#ffffff] font-semibold">Monipur, Mirpur-2, Dhaka</p>
          <p className="text-base text-[#ffffff] font-semibold">Email: moftss@gmail.com</p>
          <p className="text-base text-[#ffffff] font-semibold">Contact: 01710517793</p>
        </div>
        <div className="flex items-center gap-0">
          <p className="text-base text-[#ffffffc3] hover:text-yellow-300"><a href="#">Privacy Policy  <span className="mx-3">/</span> </a></p>
          <p className="text-base text-[#ffffffc3] hover:text-yellow-300"><a href="#">Trams and Conditions  <span className="mx-3">/</span> </a></p>
          <p className="text-base text-[#ffffffc3] hover:text-yellow-300"><a href="#">Sales and Refunds</a></p>
        </div>
        </div>
      </div>

      <div className="navbar bg-base-100 py-6 px-4 flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                 <NavLink to="/">P&P It Zone</NavLink>
              </li>
              <li>
                <a>PFS Save Food</a>
              </li>
              <li>
                <a>P&P Handicrafts</a>
              </li>
              <li>
                <a>PFS Tours & Consultancy</a>
              </li>
            </ul>
          </div>
          <a className="text-red-600 font-bold text-5xl">P&P<span className="text-[#131313] font-bold text-5xl">.com</span></a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg mt-3">
             <li>
               <NavLink to="/">P&P It Zone</NavLink>
              </li>
              <li>
                <NavLink to="/savefood">PFS Save Food</NavLink>
              </li>
              <li>
               <NavLink to="/handicrafts">P&P Handicrafts</NavLink>
              </li>
              <li>
               <NavLink to="/consultancy">PFS Tours & Consultancy</NavLink>
              </li>
              <li>
               <NavLink to="/contact">Contact</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 items-center ">
          <a className=" text-red-400"><div className="p-3 text-xl rounded-[50%] border border-red-100"><FaSearch></FaSearch></div></a>
          <a className="text-4xl text-red-400"><PiShoppingCartFill></PiShoppingCartFill></a>
          <a className="text-4xl text-red-400"><CgProfile></CgProfile></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
