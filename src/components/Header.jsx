import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="px-6 py-6 bg-gray-800 text-white flex justify-between items-center shadow-lg">
      <Link to="/"><h3>Logo</h3></Link>
      <div className="w-2/4">
        <input className="h-11 w-full border-none bg-gray-600 outline-green-400 outline-1 px-4 rounded-full" placeholder="Search a post" />
      </div>
      <nav className="hidden lg:flex">
        <ul className="gap-5 flex items-center">
          <Link className="bg-green-400 px-4 py-2 rounded-md" to="/login">Sign In</Link>
          <Link className="border border-green-400 px-4 py-2 rounded-md" to="/signup">Sign Up</Link>
        </ul>
      </nav>
    </header>
  )
}