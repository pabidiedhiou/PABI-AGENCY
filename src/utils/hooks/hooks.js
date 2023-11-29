import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/context'
export function useFetch(url) {
  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)

        const tableau = await response.json()
        const surveyData = tableau.posts
        const data = []
        for (let i = 0; i < surveyData.length; i++) {
          data.push(surveyData[i].questions)
        }

        setData(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { isLoading, data, error }
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}

export function useFetch2(url) {
  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const surveyData = await response.json()
        setData(surveyData)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { isLoading, data, error }
}
