import { createContext } from 'react'
import stores from '../stores/'
import ProjectsList from '../components/ProjectsList'

export const StoreContext = createContext()
export const StoreProvider = StoreContext.Provider

export default function ProjectsPage() {
  return (
    <StoreProvider value={stores}>
      <h1>Projects List:</h1>
      <ProjectsList />
    </StoreProvider>
  )
}
