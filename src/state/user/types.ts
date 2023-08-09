import { IUserData } from 'types/data'

export type UserState = {
  isLogged: boolean
  idToken?: null
  userData: IUserData[]
  user_role?: null
  loading?: boolean
}
