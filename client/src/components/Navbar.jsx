import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-slate-200 shadow-md top-0">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-2 sm:p-3">
      <Link  to="/">
      <h1 className="font-bold text-sm sm:text-xl cursor-pointer">
        <span className="text-slate-500">LifeLine</span>
      </h1>
      </Link>

      {/* Search bar */}
      <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:w-64"
        />
      </form>

      {/* Menu bar */}
      <ul className="flex gap-4">
          <Link to="/">
        <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
          Home
        </li>
        </Link>

        <Link to='/about'>
        <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
          About
        </li>
        </Link>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar