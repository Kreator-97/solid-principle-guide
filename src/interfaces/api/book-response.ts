import { Book } from "../book"

export interface BookResponse {
  books: Book[]
  status: string
  total: number
}