import axios from "axios"
import { HttpClient } from "../interfaces"

export class AxiosClient implements HttpClient {

  async get<T>(url: string): Promise<T> {
    const res = await axios.get<T>(url)
    const data = res.data

    return data
  }

  async post<T>(url: string, payload: T): Promise<T> {
    const res = await axios.post<T>(url, payload)
    const data = res.data

    return data
  }
}
