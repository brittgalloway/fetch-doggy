# Fetch Doggy

This is a website to help someone search through a database of shelter dogs to rescue.

> Note this is dummy data, there is no way to reach the dogs in these listings.

This project needed routing and a quick deployment so Next.js was a good JS framework to use for its built in intergrations with Typescript, Tailwind, and Vercel.

Next.js recently updated and changed it's entire structure. As such, there were challenges with reaching the dog api with the correct authorizations so the actual api folder and Route Handlers were not used. This caused a few components to be `client` when they should have be `server`.
This was disappointing and something I plan to keep working on to understand for the future.
For now, only the components and page folders were used.

Currently, the `home page` is a form with a `name` and `email` field. Both are required and the email does need a basic email format to successfully submit the form.

The `/dogs` route displays all the dogs alphabetically by breed. You can use the `sort` drop down to switch between ascending and descending order.
You can use the `search` bar to search for a specific breed. It will filter the results as you type. You can also use the `next` and `previous` buttons at the bottom to manually go through the dogs. Click on a dog you like to learn more about it.

The `/dogs/[id]` route shows the spefic dog you clicked on. It displays the full doggy photo, name, breed, age, and location/zipcode.

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
