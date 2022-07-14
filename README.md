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
- Got to ```http://localhost:3001/graphql``` to load up the Apollo Studio Explorer. 
