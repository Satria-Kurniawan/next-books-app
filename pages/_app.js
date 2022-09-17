import "../styles/globals.css"
import Layout from "../components/Layout"
import { store } from "../store"
import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps, session, ...appProps }) {
  if (
    ["/"].includes(appProps.router.pathname) ||
    ["/login"].includes(appProps.router.pathname)
  )
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      </SessionProvider>
    )
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
