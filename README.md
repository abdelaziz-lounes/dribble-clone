# Dribble Clone

This project is a clone of [Dribble](https://dribbble.com/), a platform for designers to showcase their work and get inspired by others. It is built with [Next.js](https://nextjs.org/) 13, a React framework that enables fast and scalable web development with server-side rendering and app router. It also uses [TypeScript](https://www.typescriptlang.org/), a superset of JavaScript that adds static type checking and other features.

## Features

- Responsive design: The app uses [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework that allows for easy and consistent styling across different screen sizes and devices.
- Authentication: The app uses [NextAuth.js](https://next-auth.js.org/), a library that simplifies authentication and session management for Next.js apps. The app supports social login with Google and GitHub, as well as email/password login with [Firebase](https://firebase.google.com/).
- Likes and comments: The app allows users to like and comment on shots, using [React Query](https://react-query.tanstack.com/) to manage the data fetching and caching, and [SWR](https://swr.vercel.app/) to handle data mutations and revalidation.
- Filtering and pagination: The app allows users to filter shots by category, color, or time, and display them in multiple pages, using [react-paginate](https://www.npmjs.com/package/react-paginate) for the UI component and [useSWRPages](https://swr.vercel.app/docs/pagination) for the data fetching logic.
- Image uploads: The app enables users to upload their own shots, using [react-dropzone](https://react-dropzone.js.org/) for the drag-and-drop interface and [Cloudinary](https://cloudinary.com/) for the image hosting and transformation service.

## How to run

To run the app locally, follow these steps:

1. Clone this repository: `git clone https://github.com/<your-username>/dribble-clone.git`
2. Install the dependencies: `npm install`
3. Create a `.env.local` file in the root directory and add your environment variables (see `.env.example` for reference)
4. Start the development server: `npm run dev`
5. Open http://localhost:3000 in your browser
