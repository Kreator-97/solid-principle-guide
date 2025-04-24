
export interface Readable {
  get<T>(url: string, body?: T): Promise<T>
}

export interface Creatable {
  post<T>(url: string, body?: T): Promise<T>
}

export interface Updatable {
  put<T>(url: string, body?: T): Promise<T>
}

export interface Deletable {
  delete<T>(url: string, body?: T): Promise<T>
}

export interface Patchable {
  patch<T>(url: string, body?: T): Promise<T>
}

export interface Writable extends Creatable, Updatable, Deletable {}

interface PostServiceInterface extends Readable, Creatable, Updatable, Deletable, Patchable {}

export class PostService implements PostServiceInterface {
  async get<T>(url: string, body?: T): Promise<T> {
    console.log(`GET request to ${url} with body:`, body)
    return {} as T
  }

  async post<T>(url: string, body?: T): Promise<T> {
    console.log(`POST request to ${url} with body:`, body)
    return {} as T
  }

  async put<T>(url: string, body?: T): Promise<T> {
    console.log(`PUT request to ${url} with body:`, body)
    return {} as T
  }

  async delete<T>(url: string, body?: T): Promise<T> {
    console.log(`DELETE request to ${url} with body:`, body)
    return {} as T
  }

  async patch<T>(url: string, body?: T): Promise<T> {
    console.log(`PATCH request to ${url} with body:`, body)
    return {} as T
  }
}

interface OrderServiceInterface extends Readable, Creatable, Updatable, Patchable {}

export class OrderService implements OrderServiceInterface {
  async get<T>(url: string, body?: T): Promise<T> {
    console.log(`GET request to ${url} with body:`, body)
    return {} as T
  }

  async post<T>(url: string, body?: T): Promise<T> {
    console.log(`POST request to ${url} with body:`, body)
    return {} as T
  }

  async put<T>(url: string, body?: T): Promise<T> {
    console.log(`PUT request to ${url} with body:`, body)
    return {} as T
  }

  async patch<T>(url: string, body?: T): Promise<T> {
    console.log(`PATCH request to ${url} with body:`, body)
    return {} as T
  }
}
