import { api } from '../api.ts'
import { User } from '../../types/user.ts'
import axios from 'axios'

interface PostApiLoginBodyRequest {
  identifier: string
  password: string
}

export interface PostApiLoginBodyResponse {
  jwt: string
  user: User
}

export interface PostApiLoginBodyResponseError {
  message: string
  status: number
}

export const postApiLogin = async (
  bodyRequest: PostApiLoginBodyRequest
): Promise<PostApiLoginBodyResponse> => {
  try {
    const request = await api.post('/auth/local', bodyRequest)
    return request.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.error.message || 'An unknown error occurred'
      )
    }
    throw new Error('An unknown error occurred')
  }
}
