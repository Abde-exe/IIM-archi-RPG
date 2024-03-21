import React from 'react'
import style from './style.module.css'

interface FormInputProps {
  label: string
  placeholder?: string
  name: string
  type: 'email' | 'password' | 'text'
  onChange: (value: string) => void
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder = '',
  name,
  type,
  onChange,
}) => {
  return (
    <div className={style.formItem}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        name={name}
      />
    </div>
  )
}

export default FormInput
