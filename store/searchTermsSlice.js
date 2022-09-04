import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "javascript",
}

export const searchTermsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getSearchTerms: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getSearchTerms } = searchTermsSlice.actions

export default searchTermsSlice.reducer
