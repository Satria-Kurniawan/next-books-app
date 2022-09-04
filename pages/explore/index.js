import { useEffect, useState } from "react"
import Books from "../../components/Books/Books"
import Pagination from "../../components/Pagination"
import { useSelector } from "react-redux"
import Meta from "../../components/Meta"

const Explore = () => {
  const searchTerms = useSelector((state) => state.searchTerms.value)

  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage] = useState(4)

  const handlePaginate = (number) => setCurrentPage(number)

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=40`
      )
      const data = await res.json()
      data.totalItems > 0 ? setBooks(data.items) : setBooks([])
    }

    fetchBooks()
  }, [searchTerms])

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks =
    books.length > 0 && books.slice(indexOfFirstBook, indexOfLastBook)

  return (
    <div>
      <Meta title="Explore Books" />
      <h1 className="font-bold text-2xl">Explore Books</h1>
      <Books books={currentBooks} />
      <Pagination
        currentPage={currentPage}
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={handlePaginate}
      />
      <div className="grid grid-cols-3 gap-3 mt-10">
        <div className="bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 text-white rounded-lg p-3">
          <h1 className="font-bold text-xl">Total Books</h1>
          <h2 className="font-semibold text-lg">1000+</h2>
        </div>
        <div className="bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 text-white rounded-lg p-3">
          <h1 className="font-bold text-xl">E-Books</h1>
          <h2 className="font-semibold text-lg">7000+</h2>
        </div>
        <div className="bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 text-white rounded-lg p-3">
          <h1 className="font-bold text-xl">Free E-Books</h1>
          <h2 className="font-semibold text-lg">2000+</h2>
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40`
//   )
//   const books = await res.json()

//   return {
//     props: {
//       books,
//     },
//   }
// }

export default Explore
