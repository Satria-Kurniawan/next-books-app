import Meta from "./Meta"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <Meta title="Kesbook" />
      <div className="flex">
        <Sidebar />
        <div className="w-full py-5 px-10">
          <Header />
          <main className="my-5">{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
