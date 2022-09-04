import "../styles/globals.css"
import Layout from "../components/Layout"
import { store } from "../store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps, ...appProps }) {
  if (["/"].includes(appProps.router.pathname))
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
