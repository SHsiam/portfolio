import { Link } from "react-router-dom";
import logo from '../../../public/shb.png'


const NavItems = () => {
    const navOption = <>
        <li ><Link to='/'>Home</Link></li>
        <li>
            <Link to='/project'>Project</Link>

        </li>
        <li ><Link to='/about'>About</Link></li>
        <li ><Link to='/contact'>Contact</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-gray-950  ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="/public/shb.svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-white rounded-box w-52 font-bold">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className="w-24 h-12" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-white">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    <a href='Resume of Sayed Hossain.pdf' download='resume.pdf' >
                    <button className="text-white font-bold">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavItems;