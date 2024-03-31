## Project Name: Lost and Found System

## Description:

The Lost and Found System is a web application designed to help users report lost items and search for found items. It provides a platform for users to report details about lost items they have misplaced and for others to report found items they have discovered. The goal is to facilitate the recovery of lost items by connecting owners with finders.

## Documentation

[Postman Documentation](https://documenter.getpostman.com/view/31250775/2sA35G534t)

## Run Locally

Clone the project

```bash
  git clone repo_link
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

`JWT_ACCESS_SECRET`

`JWT_TOKEN_EXPIRES_IN`

## Tech Stack

**Server:** Node, Express, Typescript

**Database:** Postgresql, Prisma

**Authentication**: JSON Web Tokens (JWT)

**Validation**: Zod, EsLint

**Deployment**: Supabase, Vercel
