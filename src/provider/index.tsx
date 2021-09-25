import { ReactNode }      from 'react'
import { SearchProvider } from './searchContent'

interface ProviderProps {
  children: ReactNode
}

export const Provider = ({children}: ProviderProps) => {

  return (
    <SearchProvider>
      {children}
    </SearchProvider>
  )
} 