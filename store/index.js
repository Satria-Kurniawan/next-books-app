import { configureStore } from "@reduxjs/toolkit"
import searchTermsReducer from "./searchTermsSlice"

export const store = configureStore({
  reducer: {
    searchTerms: searchTermsReducer,
  },
})
