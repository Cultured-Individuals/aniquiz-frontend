module.exports = {
  client: {
    includes: ['src/gql/queries/backend/*.ts', 'src/gql/mutations/backend/*.ts'],
    service: {
      name: "backend",
      url: 'http://localhost:1337/graphql',
    }
  }
}