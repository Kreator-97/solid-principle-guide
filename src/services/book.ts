import { BookResponse } from "../interfaces/api/book-response"

export class BookService {
  url = 'https://www.dbooks.org/api/recent'

  async getAll() {
    const response = await fetch(this.url)
    const data: BookResponse = await response.json()
    return data
  }
}
