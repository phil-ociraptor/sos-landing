import { useContext } from 'react'
import { StoreContext } from '../pages/projects'
import { useObserver } from 'mobx-react'

export default function ProjectsList() {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <ol className="projects-list">
      {store.ProjectsStore.projects.map((project) => (
        <li key={project.name}>
          <h4>{project.shortDesc}:</h4> <p>{project.longDesc}</p>
        </li>
      ))}
    </ol>
  ))
}
