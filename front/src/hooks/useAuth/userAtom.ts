import { atom } from 'jotai/index'
import { PostApiLoginBodyResponse } from '../../services/auth/login.ts'

const storedUserData = localStorage.getItem('userData')
const initialUserState: PostApiLoginBodyResponse | null = storedUserData
  ? JSON.parse(storedUserData)
  : null

export const userAtom = atom<PostApiLoginBodyResponse | null>(initialUserState)
