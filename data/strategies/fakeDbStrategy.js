import { projects, people } from '../fakeData'

export default class FakeDbStrategy {
  async getAllProjects() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(projects), 1000)
    })

    let result = await promise
    return result
  }

  async getAllPeople() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(people), 1000)
    })

    let result = await promise
    return result
  }
}
