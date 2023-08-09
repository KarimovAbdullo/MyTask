export interface IUser {
  password?: string
  rememberMe?: boolean
  username?: string
}

export interface ILogin {
  password?: string
  rememberMe?: boolean
  username?: string
  idToken?: null
}

export interface IPosts {
  id: number
  title: string
  body: string
}

export interface IComents {
  id: number
  postId: number
  text: string
}
