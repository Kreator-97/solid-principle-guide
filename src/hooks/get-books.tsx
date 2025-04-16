import { useEffect, useState } from "react"
import { Book as BookType } from "../interfaces/book"
import { Book } from "../services/book"
const book = new Book()

export const useBooks = () => {
  const [books, setBooks] = useState<BookType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    book.getAll()
      .then((data) => {
        setBooks(data.books)
      })
      .catch((error) => {
        console.error('Error fetching books:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    books,
    isLoading,
  }
}
