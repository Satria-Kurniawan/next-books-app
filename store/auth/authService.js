import axios from "axios"

// Login user
const login = async (userData) => {
  const response = await axios.post("/api-v1/users/login", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

const authService = {
  login,
}

export default authService
