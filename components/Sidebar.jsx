import { IoBookSharp, IoLibrarySharp } from "react-icons/io5"
import { MdExplore, MdInfo, MdHelp, MdArrowBack } from "react-icons/md"
import { CgLogOut } from "react-icons/cg"
import { BsArrowRightSquare } from "react-icons/bs"
import { useState } from "react"
import Link from "next/link"

const Sidebar = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center h-screen">
      <aside
        className={`relative flex flex-col justify-between p-4 rounded-r-lg bg-white text-gray-900 h-[97vh] duration-500
      ${isOpen ? "w-64" : "w-16"}`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-20 -right-3 bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 text-white rounded-lg cursor-pointer 
        ${isOpen && "-rotate-180"} duration-300`}
        >
          <BsArrowRightSquare size={30} />
        </div>
        <Link href="/">
          <div className="flex items-center gap-x-3 font-bold text-2xl overflow-hidden cursor-pointer">
            <div className={`duration-300 ${!isOpen && "-rotate-[360deg]"}`}>
              <IoBookSharp size={30} />
            </div>
            <span
              className={`origin-left duration-500 ${!isOpen && "scale-0"}`}
            >
              Kesbook
            </span>
          </div>
        </Link>
        <ul className="flex flex-col gap-7 font-semibold text-lg mb-20">
          <li className="flex items-center gap-x-3 cursor-pointer">
            <div>
              <IoLibrarySharp size={30} />
            </div>
            <span
              className={`origin-left duration-500 ${
                !isOpen && "-translate-x-5 opacity-0"
              }`}
            >
              MyLibrary
            </span>
          </li>
          <Link href="/explore">
            <li className="flex items-center gap-x-3 cursor-pointer">
              <div>
                <MdExplore size={30} />
              </div>
              <span
                className={`origin-left duration-500 ${
                  !isOpen && "-translate-x-5 opacity-0"
                }`}
              >
                Explore
              </span>
            </li>
          </Link>
          <li className="flex items-center gap-x-3 cursor-pointer">
            <div>
              <MdInfo size={30} />
            </div>
            <span
              className={`origin-left duration-500 ${
                !isOpen && "-translate-x-5 opacity-0"
              }`}
            >
              About
            </span>
          </li>
          <li className="flex items-center gap-x-3 cursor-pointer">
            <div>
              <MdHelp size={30} />
            </div>
            <span
              className={`origin-left duration-500 ${
                !isOpen && "-translate-x-5 opacity-0"
              }`}
            >
              Help
            </span>
          </li>
          <Link href="/">
            <li className="flex items-center gap-x-3 cursor-pointer">
              <div>
                <MdArrowBack size={30} />
              </div>
              <span
                className={`origin-left duration-500 ${
                  !isOpen && "-translate-x-5 opacity-0"
                }`}
              >
                GoBack
              </span>
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-x-3 font-semibold text-xl invisible">
          <div>
            <CgLogOut size={30} />
          </div>
          <span
            className={`origin-left duration-500 ${
              !isOpen && "-translate-x-5 opacity-0"
            }`}
          >
            Logout
          </span>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
