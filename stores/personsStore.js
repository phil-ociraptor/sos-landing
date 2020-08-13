import { observable, action } from 'mobx'

class PersonsStore {
  @observable persons = observable([
    {
      linkedin: 'https://www.linkedin.com/example',
      url: 'https://github.com/justonsky',
      twitter: 'https://twitter.com/jack',
      discord: 'Example#0024',
      name: 'Juston',
      id: 'recDuH14baZ9kVC0M',
    },

    {
      linkedin: 'https://www.linkedin.com/example',
      url: 'https://github.com/github',
      twitter: 'https://twitter.com/jack',
      discord: 'Cricket#0001',
      name: 'Jiminy Cricket',
      id: 'rec11THOqZMjZKOMV',
    },

    {
      linkedin: 'https://www.linkedin.com/example',
      url: 'https://github.com/esu2020',
      twitter: 'https://twitter.com/jack',
      discord: 'Example#8773',
      name: 'Eva',
      id: 'recTUd4hRO8IPaMc1',
    },

    {
      linkedin: 'https://www.linkedin.com/example',
      url: 'https://github.com/pandevim',
      twitter: 'https://twitter.com/jack',
      discord: 'Example#5847',
      name: 'Pandevim',
      id: 'recUsZIuhdp9gkp4s',
    },

    {
      linkedin: 'https://www.linkedin.com/example',
      url: 'https://github.com/phil-ociraptor',
      twitter: 'https://twitter.com/jack',
      discord: 'Example#2222',
      name: 'Phil',
      id: 'recHPNSNgkspbAcqa',
    },
  ])

  @action addPerson(Person) {
    this.Persons.push = Person
  }

  @action removePerson(name) {
    this.Persons = this.Persons.filter((Person) => Person.name !== name)
  }
}
export default new PersonsStore()
