import { useBooks } from "../../hooks/get-books"
import { BookCard } from "./book-card"

export const BookGrid = () => {

  const { books, isLoading } = useBooks()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (books.length === 0) {
    return <p>No books found</p>
  }

  return (
    <div>
      <h1 className="mb-2 text-2xl">All books for sale</h1>
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </section>
    </div>
  )
}
