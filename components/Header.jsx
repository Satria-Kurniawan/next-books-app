import { useState } from "react"
import {
  IoNotificationsOutline,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5"
import { useDispatch } from "react-redux"
import { getSearchTerms } from "../store/searchTermsSlice"

const Header = () => {
  const [searchTerms, setSearchTerms] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearchTerms(searchTerms))
  }

  const date = new Date()
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const currentDate = `${day[date.getDay()]}, 
  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  return (
    <header className="flex justify-between">
      <div>
        <div className="flex gap-x-5">
          <form onSubmit={handleSubmit} className="flex gap-x-1 items-center">
            <button type="submit" className="bg-white rounded-lg p-2">
              <IoSearch />
            </button>
            <div>
              <input
                onChange={(e) => setSearchTerms(e.target.value)}
                type="text"
                placeholder="Search..."
                className="bg-transparent border-b py-1 px-2 focus:outline-white rounded-lg"
                size={70}
              />
            </div>
          </form>
          <div>
            <span className="text-gray-400">{currentDate}</span>
          </div>
        </div>
      </div>
      <div className="inline-flex gap-3">
        <IoNotificationsOutline size={20} />
        <IoSettingsOutline size={20} />
      </div>
    </header>
  )
}

export default Header
