import { IComents, IPosts } from 'types/data'

export type PostState = {
  postData: IPosts[]
  loading?: boolean
  error: null | string
  coments: IComents[]
}
