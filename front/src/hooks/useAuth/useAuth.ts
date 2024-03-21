'use client'
import { useState } from 'react'
import { formLoginTypes } from './useAuth.d'
import { postApiLogin } from '../../services/auth/login.ts'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userAtom } from './userAtom.ts'

interface useAuthProps {
  handleLogin: (formLogin: formLoginTypes) => void
  error: string | null
  handleLogout: () => void
}

export const useAuth = (): useAuthProps => {
  const [error, setError] = useState<string | null>(null)
  const [, setUser] = useAtom(userAtom)
  const navigate = useNavigate()
  const handleLogin = async (loginForm: formLoginTypes) => {
    try {
      setError(null)
      const response = await postApiLogin({
        identifier: loginForm.email,
        password: loginForm.password,
      })
      localStorage.setItem('userData', JSON.stringify(response))
      setUser(response)
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const handleLogout = () => {
    navigate('/login')
    localStorage.clear()
    setUser(null)
  }

  return {
    handleLogin,
    error,
    handleLogout,
  }
}
