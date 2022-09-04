import { BsFillStarFill, BsStarHalf } from "react-icons/bs"
import Button from "../Button"

const Books = ({ books }) => {
  return (
    <div className="flex gap-3 my-5">
      {books.length > 0 ? (
        books.map((book, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 p-1 rounded-lg"
          >
            <div className="flex gap-x-2 bg-white rounded-lg w-full max-w-xs h-full">
              <img
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt="book thumbnail"
              />
              <div className="flex flex-col justify-between text-sm text-gray-700 p-2">
                <div>
                  <h1 className="font-bold mb-1">{book.volumeInfo.title}</h1>
                  <h2 className="font-semibold mb-1">
                    {book.volumeInfo.subtitle}
                  </h2>
                  <h3 className="mb-1">by {book.volumeInfo.authors}</h3>
                  <div className="flex items-center gap-x-1 text-yellow-500">
                    {book.volumeInfo.averageRating === 1 ? (
                      <BsFillStarFill />
                    ) : book.volumeInfo.averageRating === 1.5 ? (
                      <>
                        <BsFillStarFill />
                        <BsStarHalf />
                      </>
                    ) : book.volumeInfo.averageRating === 2 ? (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) : book.volumeInfo.averageRating === 2.5 ? (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                      </>
                    ) : book.volumeInfo.averageRating === 3 ? (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) : book.volumeInfo.averageRating === 3.5 ? (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                      </>
                    ) : book.volumeInfo.averageRating === 4 ? (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) : book.volumeInfo.averageRating === 4.5 ? (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                      </>
                    ) : (
                      book.volumeInfo.averageRating === 5 && (
                        <>
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                        </>
                      )
                    )}
                    {book.volumeInfo.averageRating}
                  </div>
                </div>
                <div className="my-2">
                  <a href={book.volumeInfo.previewLink} target="_blank">
                    <Button
                      theme={
                        "w-full bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 text-white rounded-lg"
                      }
                      btnText={"View"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default Books
