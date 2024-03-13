# Documentation for API backend PineappleSoccer 2.0

## Technologies and dependencies

- API written in TypeScript with NodeJS
- Prisma
- Mongodb

---

## Step by step

`npm init`

- to initialize the **_package.json_**

`npm install`

- to initialize the **_package-lock.json_**

`npm install typescript --save-dev`

- to install only in development environment
  - which will bring the **_node_modules_** package and the **TypeScript** dependencies into **_package.json_**

`tsc --init`

- to initialize TypeScript in the project
  - This will create the tsconfig.json file

`npm install fastify @fastify/cors`

- Fastify is a web framework for Node.js known for its speed and efficiency. It is used to create web APIs quickly and efficiently

- Cors is a middleware package for Express.js that allows controlling resource sharing policies between different origins in web applications. It is useful for handling HTTP requests from different origins and allowing or denying access to resources on a server.

`npm install tsx`

- It is a library for running our TypeScript files

`npm install @types/node --save-dev`

- To install Node.js typings

```
  scripts:
    "dev": "tsx watch src/server.ts"
```

- create the 'dev' script in the **_package.json_**

- create server.ts

![server.ts](./img/server-ts1.PNG)

`npm run dev`

- To run the application

![npm run dev](./img/npmRunDev.PNG)

## With the configurations of the routes.ts and server.ts files, we obtain our first test GET route

- routes.ts
  ![routes.ts](./img/routes-ts-initial.PNG)

---

- server.ts
  ![server.ts](./img/server-ts-initial.PNG)

---

- localhost:3333/test
  ![localhost3333/test](./img/localhost3333-test.PNG)

## Sign in to your MongoDB Atlas account.

![Sign](./img/Sign-in-mongodb-atlas.PNG)

- Create a new project
- Create a new database
- Create user an password
- And adjust IP Access List
- Connect the drivers

`npm install prisma --save-dev`

- to install prisma

`npm install @prisma/client`

- to install prisma client

`npx prisma init`

- To initialize Prisma configuration, for it to generate our database connection file

- Modify the schema.prisma files and in the data-baseURL of the .env file, change the path obtained on MongoDB Atlas after connecting the drivers

`npx prisma generate`

- Afterwards, inside the ./src folder, create a folder and the file ./src/prisma/index.ts

`npx prisma studio`

![npx prisma studio](./img/npx-prisma-studio.PNG)

---

![npx prisma studio/player](./img/npx-prisma-studio-player.PNG)

## Created folders controllers and services

- And next create other routes

---

- creation of **_README.md_** and **_DOCUMENTATION.md_**

---

## Basic development settings installed and used in the project.

- NodeJS
- Insominia
- Mongodb Atlas
- Prisma ORM
