import { Creatable, HttpClient, Readable } from "./interfaces"
import { FetchHttpClient } from "./classes/fetch-http"

interface PostServiceInterface extends Readable, Creatable {}

export class PostService implements PostServiceInterface {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  async find<T>(): Promise<T> {
    const data = await this.httpClient.get<T>('https://jsonplaceholder.typicode.com/posts')

    return data
  }

  async create<T>(payload: T): Promise<T> {
    const data = await this.httpClient.post<T>('https://jsonplaceholder.typicode.com/posts', payload)
    return data
  }
}

const postService = new PostService(new FetchHttpClient())

postService.find()
  .then((data) => {
    console.log('data', data)
  })
