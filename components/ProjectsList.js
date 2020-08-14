import { useContext } from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_PROJECTS = gql`
  query MyQuery {
    project {
      id
      name
      summary
      description
    }
  }
`

export default function ProjectsList() {
  const { data, loading, error, fetchMore } = useQuery(GET_PROJECTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>

  return (
    <ol className="projects-list">
      {data.project &&
        data.project.map((project) => (
          <li key={project.id}>
            <h1>{project.name}</h1>
            <b>{project.summary}</b>
            <p>{project.description}</p>
          </li>
        ))}
      {data.project.hasMore && (
        <button onClick={() => fetchMore()}>Load More Projects</button>
      )}
    </ol>
  )
}
