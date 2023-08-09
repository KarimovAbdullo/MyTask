import R from 'res'
import { API_PATH_SOCIAL_ACCOUNT } from 'res/consts'
import {
  IBirthdayData,
  ICategoryData,
  ILogin,
  ILoginSocial,
  IRegisterData,
  ISocialAccount,
  IUser,
  IVerifyUser,
  IVerifyUserData,
} from 'types/data'

import apiClient from './instance'

/**
 * Get user
 */
export const apiLoginUser = async (
  data: ILogin | ILoginSocial,
): Promise<IUser | null> => {
  try {
    const url =
      'socialNetwork' in data
        ? R.consts.API_PATH_AUTH_SOCIAL
        : R.consts.API_PATH_LOGIN

    const { data: response } = await apiClient.post<IUser>(url, data)

    return response
  } catch (e) {
    throw e
  }
}

/**
 * RegisterClient user
 */
export const registerUser = async (data: IRegisterData): Promise<IUser> => {
  try {
    const { data: response } = await apiClient.post<IUser>(
      R.consts.API_PATH_REGISTER,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}

/**
 * verify user
 */
export const verifyUserApi = async (
  data: IVerifyUserData,
): Promise<IVerifyUser> => {
  try {
    const { data: response } = await apiClient.post<IVerifyUser>(
      R.consts.API_PATH_VERIFY_USER,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}

/**
 * register pro user
 */
export const registerProUserApi = async (): Promise<{ id: string } | null> => {
  try {
    const { data: response } = await apiClient.post<{ id: string } | null>(
      R.consts.API_PATH_REGISTER_PRO_USER,
    )

    return response
  } catch (e) {
    throw e
  }
}

/**
 * add categories for user
 */
export const addUserCategoriesApi = async (
  data: ICategoryData,
): Promise<IUser> => {
  try {
    const { data: response } = await apiClient.post<IUser>(
      R.consts.API_PATH_USER_CATEGORIES,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}

export const registerProWithSocialApi = async (
  data: ISocialAccount,
): Promise<ISocialAccount | null> => {
  try {
    const { data: response } = await apiClient.put<ISocialAccount>(
      API_PATH_SOCIAL_ACCOUNT,
      data,
    )

    if (response) {
      return response
    }
    return null
  } catch (e) {
    throw e
  }
}

/**
 * birthday api
 */
export const createBirthdayApi = async (
  data: IBirthdayData,
): Promise<IBirthdayData | null> => {
  try {
    const { data: response } = await apiClient.post<IBirthdayData | null>(
      R.consts.API_PATH_BIRTHDAY,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}
