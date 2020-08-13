export default class DataFetcher {
  constructor(dbStrategy) {
    this.strategy = dbStrategy
  }

  async getAllProjects() {
    return await this.strategy.getAllProjects()
  }

  async getAllPeople() {
    return await this.strategy.getAllPeople()
  }
}
