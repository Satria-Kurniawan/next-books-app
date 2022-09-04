import Button from "./Button"

const Pagination = ({ currentPage, booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex my-5">
      <div onClick={() => paginate(currentPage - 1)}>
        <Button
          theme={"bg-gray-900 text-white rounded-l-lg"}
          btnText={"Previous"}
        />
      </div>
      {pageNumbers.map((number) => (
        <div
          onClick={() => paginate(number)}
          key={number}
          className={`border h-8 w-8 flex justify-center items-center cursor-pointer ${
            currentPage === number &&
            "bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 text-white"
          }`}
        >
          <h1>{number}</h1>
        </div>
      ))}
      <div onClick={() => paginate(currentPage + 1)}>
        <Button
          theme={"bg-gray-900 text-white rounded-r-lg"}
          btnText={"Next"}
        />
      </div>
    </div>
  )
}

export default Pagination
