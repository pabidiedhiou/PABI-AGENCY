import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../Context/Context'

export function useFetch(url) {
  const [data, setData] = useState({})

  const [isDataLoading, setIsDataLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return true

    setIsDataLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)

        const data = await response.json()

        setData(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setIsDataLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isDataLoading, data, error }
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
