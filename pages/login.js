import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginUser, reset } from "../store/auth/authSlice"
import { toast } from "react-toastify"
import Button from "../components/Button"

const login = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, message } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(reset())
  }, [isLoading, isError, message, dispatch])

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(loginUser(userData))
  }

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <section className="h-[80vh] flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl mb-5">Sign In</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={onChange}
            size={50}
            className="p-3 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={onChange}
            size={50}
            className="p-3 rounded-lg"
          />
        </div>
        <div className="mt-3">
          <Button
            type="submit"
            theme="bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 rounded-lg text-white text-xl font-bold py-2 px-4"
            btnText="Login"
          />
        </div>
      </form>
    </section>
  )
}

export default login
