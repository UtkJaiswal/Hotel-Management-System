This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Hotel Management App

## Project setup

```bash
npm run dev
```

## User module

    1.  Login route: [http://localhost:3000/login](http://localhost:3000/login) allows users to login

    2.  Signup route: [http://localhost:3000/signup](http://localhost:3000/signup) allows users to register

    3.  Rooms route: [http://localhost:3000/rooms](http://localhost:3000/rooms) allows users to select check in and checkout date and accordingly shows the available rooms

## Admin module [http://localhost:3000/admin](http://localhost:3000/admin)

    1.  Login route: [http://localhost:3000/admin](http://localhost:3000/admin) allows admin to login

    2.  Rooms route: [http://localhost:3000/admin/rooms](http://localhost:3000/admin/rooms) shows all rooms

    3.  Update a room route: [http://localhost:3000/admin/rooms/<room_id>](http://localhost:3000/admin/rooms/<room_id>) allows to update a particular room.

    4.  Booking details route: [http://localhost:3000/admin/bookingDetails](http://localhost:3000/admin/bookingDetails) shows all booking details like check in and checkout date, price and the total revenue.

    Credentials for admin:

    email: admin@gmail.com
    password:admin
