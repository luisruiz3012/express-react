import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gray-800 px-8 py-8 w-full text-white flex flex-col lg:flex-row gap-5 items-center justify-between">
      <section className="flex flex-col gap-4 xl:w-1/3">
        <Link to="/"><h3>Logo</h3></Link>
        <p className="hidden xl:flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, pariatur maxime id quaerat.</p>
      </section>
      <section className="lg:w-1/3 text-center">
        <p>&copy; All rights reserved to luisruiz3012</p>
      </section>
      <section className="lg:w-1/3 text-center">
        <p>Email:<br />luisdiegoaguilarr@gmail.com</p>
      </section>
    </footer>
  )
}