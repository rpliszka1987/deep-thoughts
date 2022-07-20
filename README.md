# Deep Thoughts

## Installation

- Navigate to `/server` directory
- Run `$ npm i ` to install all packages
- Run `$ npm run seed` to seed the database for the project

## Technologies used

- **GraphQL (Graph Query Language)** - a query language for data requests. Can retrive more data in a single HTTP request then REST API. You can also specify to just get the data you need instead of all the data.

- **Apollo** is a server-side and client-side libary which works with GraphQL
- Install both libraries `npm i apollo-server-express graphql`
- **nodemon (Node monitor)** npm package that refresh the browser automatically on file changes. Helps avoid starting and killing the server.
- **Apollo Studio Explorer** - is a built in tool that automatically set up with the Apollo server and lets us our GraphQL quesries and mutations.
- **JSON Web Token (JWT)** - used for authentitcation. It encodes the information about user into a token.

## GraphQL

- Works different than REST API which used CRUD. Instead GraphQL uses two categories:
  - **Queries** are how we perform GET requests and ask for data from a GraphQL API
  - **Mutations** is how we perform POST, PUT, and DELETE requests to create or manipulate data through a GraphQL API
- When making and API request we are either making a query request or mutation request
- GraphQL Schema is made of:
  - **Type definitions** Type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation. Every GraphQL API starts with defining this data, as this type of strict type definition will give the client more clarity as to what they are asking for and what they can expect in return. Think of this as not only defining the API endpoint, but also defining the exact data and parameters that are tied to that endpoint.
  - **Resolvers** Resolvers are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform.
- To use GrapgQL in your project create a `schemas` directory in your `server` directory with the following files inside (Check out ./server/schema/ for how each file is setup in the project):
  - typeDefs.js
  - resolvers.js
  - index.js
- Next step is to setup the Apollo server in the `server.js` directory. Look in `./sever/server.js` in the application files.
- To start Apollo Server run the following command `$ npm run watch`
- Got to `http://localhost:3001/graphql` to load up the Apollo Studio Explorer.
- Getting data from the API use the following code

```
query {
  # find a username from your previous query's results and paste it in for `<username-goes-here>` (i.e. "Wilton18")
  thoughts(username: "<username-goes-here>") {
    username
    thoughtText
  }
}
```

- Resolver can accept 4 arguments:
- **parent** - This is if we used nested resolvers to handle more complicated actions, as it would hold the reference to the resolver that executed the nested resolver function.
- **args** - This is an object of all of the values passed into a query or mutation request as parameters. In this application its username.
- **context** - f we were to need the same data to be accessible by all resolvers, such as a logged-in user's status or API access token, this data will come through this context parameter as an object.
- **info** - This will contain extra information about an operation's current state

- **Mutation** is used for creating, updating, and deleting operations in GraphQL

## JSON Web Token (JWT)

- JWT takes user information we want to pass to the backend and encodes it with information we would like to pass to it. This way it knows exactly users information and all other information provided.
- The token should not include sensitive data such as password. Also always sign your tokens with a secret.
- Install by running ` $ npm i jsonwebtoken`
- Create a `auth.js` files inside the `utils` directory in the `server` directory.
- For set up of JWT look into `./server/utils/auth.js` directory.
- HTTP header is the best to include for authorization.
- To get a user authentication token run the following code in the Appolo Studio Exporer

```
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}

```

Make sure to include Variable

```
{
  "email": "test2@test.com",
  "password": "test12345"

}
```

## Create Client Side

- Create a client side to handle the front-end of the application. This will be in the client directory separate from the server side. The root of the application will have `server` and `client` directories in it.
- Create React files for the project by running the following command:
  `$ npx create-react-app client`
- CD into the driectory and run `$ npm start` to start the React application to make sure it all works.
- Remove all the default files which had been created by the React application creating. Add files to choose which files you want to display in your application.

## Install and Set Up Apollo Client

- To install the Apollo Client run the following command in the `client` directory
  `$ npm i @apollo/client graphql`
- Import Apollo Client in the `App.js` file in the root of the client directory

```
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
```

- Here is what each one of them do:
  - `ApolloProvider` - is a special type of React component that we'll use to provide data to all of the other components.
  - `ApolloCient` - is a constructor function that will help initialize the connection to the GraphQL API server.
  - `InMemoryCache` - enables the Apollo Client instance to cache API response data so that we can perform requests more efficiently.
  - `createHttpLink` - allows us to control how the Apollo Client makes a request. Think of it like middleware for the outbound network requests
  - Add the connection between front and back end. in the `App.js` file above App function declatarion add the following code.

```
const httpLink = createHttpLink({
uri: 'http://localhost:3001/graphql',
});


const client = new ApolloClient({
link: httpLink,
cache: new InMemoryCache(),
});

```

- Next update the App() to ApolloProvider

```
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
```
