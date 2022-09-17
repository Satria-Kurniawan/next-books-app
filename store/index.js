import { configureStore } from "@reduxjs/toolkit"
import searchTermsReducer from "./searchTermsSlice"
import authReducer from "./auth/authSlice"

export const store = configureStore({
  reducer: {
    searchTerms: searchTermsReducer,
    auth: authReducer,
  },
})
