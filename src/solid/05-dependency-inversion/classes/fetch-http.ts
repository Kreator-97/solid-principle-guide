import { HttpClient } from "../interfaces";

export class FetchHttpClient implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url, { method: 'GET' })
    const data: T = await res.json();

    return data
  }

  async post<T>(url: string, data: T): Promise<T> {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const responseData: T = await res.json();

    return responseData
  }
}
