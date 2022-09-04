import Nav from "../components/Nav"
import Button from "../components/Button"
import { MdTravelExplore } from "react-icons/md"
import { IoSearch } from "react-icons/io5"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getSearchTerms } from "../store/searchTermsSlice"
import Meta from "../components/Meta"

export default function Home() {
  const router = useRouter()
  const [searchTerms, setSearchTerms] = useState("")
  const dispatch = useDispatch()

  const searchBooks = () => {
    dispatch(getSearchTerms(searchTerms))
    router.push("/explore")
  }

  return (
    <div>
      <Meta title="Kesbook" />
      <img src="images/1.jpg" className="absolute top-0 left-0 brightness-75" />
      <Nav />
      <div className="absolute z-10 text-white py-10 px-28 max-w-4xl opacity-90">
        <h1 className="font-bold text-6xl mb-3">Kesbook</h1>
        <h2 className="font-semibold text-4xl mb-3">Find Your Next Book</h2>
        <div className="flex gap-x-1 w-fit rounded-lg mb-3">
          <input
            onChange={(e) => setSearchTerms(e.target.value)}
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-lg text-black"
            size={40}
          />
          <div onClick={searchBooks}>
            <Button
              theme={
                "bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 rounded-lg text-xl font-bold py-2 px-4"
              }
              icon={<IoSearch size={25} />}
            />
          </div>
        </div>
        <p className="text-xl mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni illum
          quis delectus, autem similique et, temporibus sint adipisci ipsum
          consequuntur repudiandae ad maiores dicta ex, ab impedit. Ratione
          reprehenderit.
        </p>
        <Link href="/explore">
          <div>
            <Button
              theme={
                "bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 rounded-lg text-xl font-bold py-2 px-4"
              }
              icon={<MdTravelExplore size={25} />}
              btnText={"Explore"}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
