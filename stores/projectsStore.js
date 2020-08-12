import { observable, action } from 'mobx'

class ProjectsStore {
  @observable projects = [
    {
      shortDesc: 'The Summer of Shipping Showcase project!',
      mentors: ['recHPNSNgkspbAcqa'],
      longDesc:
        'This is a showcase that will display the various projects student teams & mentors have worked on. This project utilizes many tools and this is placeholder text.',
      categories: ['WebApps'],
      projectURL: 'https://github.com/phil-ociraptor/sos-landing',
      collaborators: [
        'recDuH14baZ9kVC0M',
        'rec11THOqZMjZKOMV',
        'recTUd4hRO8IPaMc1',
        'recUsZIuhdp9gkp4s',
      ],
      techUsed: ['Angular', 'JavaScript', 'Python'],
      status: 'in-progress',
      openToContributors: 'true',
      pointPerson: ['recHPNSNgkspbAcqa'],
      name: 'SoS Showcase',
      statusLastUpdated: '2020-06-22T23:38:57.000Z',
    },

    {
      shortDesc: 'Placeholder text.',
      mentors: ['recHPNSNgkspbAcqa'],
      longDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      categories: ['WebApps', 'Game Development'],
      projectURL: 'https://github.com/phil-ociraptor/sos-landing/',
      collaborators: ['rec11THOqZMjZKOMV'],
      techUsed: ['Django', 'Angular', 'JavaScript', 'Python'],
      status: 'planning',
      openToContributors: 'true',
      pointPerson: ['recTUd4hRO8IPaMc1'],
      name: 'Project #2',
      statusLastUpdated: '2020-06-22T23:41:35.000Z',
    },

    {
      shortDesc: 'Placeholder text.',
      mentors: ['recHPNSNgkspbAcqa'],
      longDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      categories: ['Android', 'Data Science'],
      projectURL: 'https://github.com/phil-ociraptor/sos-landing/',
      collaborators: [
        'recUsZIuhdp9gkp4s',
        'recTUd4hRO8IPaMc1',
        'recDuH14baZ9kVC0M',
        'rec11THOqZMjZKOMV',
      ],
      techUsed: ['React', 'PostgreSQL', 'Angular'],
      status: 'finished',
      openToContributors: 'true',
      pointPerson: ['recUsZIuhdp9gkp4s'],
      name: 'Project #3',
      statusLastUpdated: '2020-06-22T23:41:58.000Z',
    },

    {
      shortDesc: 'Placeholder text.',
      mentors: ['recHPNSNgkspbAcqa'],
      longDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      categories: ['WebApps'],
      projectURL: 'https://github.com/phil-ociraptor/sos-landing/',
      collaborators: [
        'recUsZIuhdp9gkp4s',
        'recTUd4hRO8IPaMc1',
        'recDuH14baZ9kVC0M',
        'rec11THOqZMjZKOMV',
      ],
      techUsed: ['HTML', 'CSS'],
      status: 'shipped',
      openToContributors: 'false',
      pointPerson: ['recDuH14baZ9kVC0M'],
      name: 'Project #4',
      statusLastUpdated: '2020-06-22T23:42:02.000Z',
    },
  ]

  @action addProject(project) {
    this.projects.push = project
  }

  @action removeProject(name) {
    this.projects = this.projects.filter((project) => project.name !== name)
  }
}

export default new ProjectsStore()
