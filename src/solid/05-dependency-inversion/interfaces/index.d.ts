export interface Readable {
  find<T>(): Promise<T>
}

export interface Creatable {
  create<T>(data: T): Promise<T>
}

export interface Updatable {
  update<T>(id: string, data: T): Promise<T>
}

export interface Deletable {
  remove(id: string): Promise<void>
}

interface HttpClient {
  get<T>(url: string): Promise<T>
  post<T>(url: string, data: T): Promise<T>
}

