# Fetch Doggy

This is a website to help someone search through a database of shelter dogs to rescue.

> Note this is dummy data, there is no way to reach the dog in these listings.
> The dogs can be searched by breed or shifted through.

This projected needed routing and a quick deployment so Next.js was a good JS framework to use for ist built in intergrations with Typescript, Tailwind, and Vercel.

Next.js recently updated and changed it's entire struture. As such there were challenges with reaching the dog api with the correct authorizations and the actual api folder and Route Handlers were not used. This caused a few components to be `client` when they should have be `server`.
This was disappointing and something I plan to keep working on to understand for the future.
For now, only the components and page folders were used.

Currently, the home page is a form with a `name` and `email` field. Both are required and the email does need a basic email format to successfully submit the form.

## Getting Started

This app was created with [Next.js](https://nextjs.org/) 13. Be sure to install the lastest version.
Node.js version 16.8 or later.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

First, run the development server:

```bash
npm install
```

then run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
There are no passwords or secrets that you'll need to run this locally.

## Routing

All api requests are made with Axios.
[SWR]('https://swr.vercel.app/docs/getting-started') was also used to handle most of the Axios requests.

## Tailwind

Most of this app is made with regular CSS. Tailwind is used for colors, font sizes, flexbox, and box-shadows.
A future version of this will likely be be done entirely with SASS/SCSS.

## Deployment

Lastly, this is a live app deployed by Vercel. To update the delpoyment, push to the `main` branch.

> Example of the selected dog's url path /dogs/U3GFTIcBOvEgQ5OCx8A2
