import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navbar() {
  const {currentUser} = useSelector(state=>state.user)
   return (
    currentUser ?<nav className="fixed w-screen shadow-md top-0 dark:bg-slate-950 ">
    <div className="flex justify-between items-center  mx-auto p-3 lg:px-10">
      <Link  to="/">
      <h1 className="font-bold text-sm sm:text-xl cursor-pointer">
        <span className="text-black dark:text-white">LifeLine</span>
      </h1>
      </Link>


      {/* Menu bar */}
      <ul className="flex font-bold text-sm lg:text-lg gap-16">
          <Link to="/">
        <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer dark:text-white">
          Home
        </li>
        </Link>

        <Link to='/medical-reports'>
        <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer dark:text-white">
          Medical Reports
        </li>
        </Link>

        <Link to='/family-details'>
        <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer dark:text-white">
          Family Details
        </li>
        </Link>

        <Link to='/hospital-history'>
        <li className="hidden lg:inline text-slate-700 hover:underline hover:cursor-pointer dark:text-white">
          Hospitals Visited
        </li>
        </Link>

        <Link to='/blogs'>
        <li className="hidden lg:inline text-slate-700 hover:underline hover:cursor-pointer dark:text-white">
          Blogs
        </li>
        </Link>
      </ul>

      {/* Search bar */}
      <form className="bg-slate-100 p-3 rounded-lg flex items-center dark:bg-slate-800">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:w-64 dark:bg-slate-800 dark:text-white"
        />
      </form>
    </div>
  </nav> : ""
  ) 
}

export default Navbar