import { IoBookSharp } from "react-icons/io5"
import Link from "next/link"
import { useSession, signIn } from "next-auth/react"

const Nav = () => {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-10 flex justify-between bg-transparent py-5 px-28 text-white">
      <div className="flex items-center gap-x-3">
        <IoBookSharp size={30} />
        <h1 className="text-2xl font-bold">Kesbook</h1>
      </div>
      <ul className="inline-flex gap-x-10 font-semibold text-lg">
        <Link href="/explore">
          <li className="cursor-pointer">Explore</li>
        </Link>
        <a href="https://wa.me/6281331916589" target="_blank">
          <li>Contact</li>
        </a>
        <a href="https://github.com/satria-kurniawan" target="_blank">
          <li>Github</li>
        </a>

        {!session ? (
          <li onClick={() => signIn()} className="cursor-pointer">
            Sign In
          </li>
        ) : (
          <Link href="/profile">
            <li className="cursor-pointer">{session.user.name}</li>
          </Link>
        )}
      </ul>
    </nav>
  )
}

export default Nav
