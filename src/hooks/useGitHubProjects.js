import { useState, useEffect } from 'react'
import axios from 'axios'

function useGitHubProjects(username) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`
        )
        setProjects(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    if (username) {
      fetchProjects()
    }
  }, [username])

  return { projects, loading, error }
}

export default useGitHubProjects
