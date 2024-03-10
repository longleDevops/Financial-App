# Introduction

DynamiteTrade is an opensource financial project aiming to provide a clean and snappy user interface to view stock information of companies in (soft) real time.
The project is written in JavaScript/TypeScript leveraging full stack framework NextJS and deploying on Vercel hosting platform.

Here is the site: [https://dynamitetrade.vercel.app/](https://dynamitetrade.vercel.app/)

![](https://github.com/longleDevops/Financial-App/blob/main/public/landing-page/landing-animation.gif)

## Tech Stack

* Vercel
* [![Next][Next.js]][Next-url]
* Shadcn-UI
* Supabass
* PrismaORM
* Clerk
* OpenAI API
* Chart.JS
* Aceternity-UI

## Project Layout

```
└──./
    ├──app/
    │   ├──(auth)/
    │   │   ├──(routes)/
    │   │   │   ├──sign-in/
    │   │   │   │   └──[[...sign-in]]/
    │   │   │   └──sign-up/
    │   │   │       └──[[...sign-up]]/
    │   ├──(landing-page)/
    │   ├──(root)/
    │   │   ├──(routes)/
    │   │   │   ├──chat/
    │   │   │   │   ├──components/
    │   │   │   ├──dashboard/
    │   │   │   │   ├──components/
    │   │   │   │   │   ├──accordion/
    │   │   │   │   │   ├──account/
    │   │   │   │   │   ├──bank/
    │   │   │   │   │   ├──not-use/
    │   │   │   │   │   ├──table/
    │   │   │   └──market/
    │   │   │       ├──components/
    │   │   │       │   ├──company-profile/
    │   │   │       │   ├──company-table/
    │   │   │       │   ├──products/
    │   │   │       │   └──transaction/
    │   ├──api/
    │   │   ├──account/
    │   │   ├──chat/
    │   │   ├──dashboard-watchlist/
    │   │   ├──market-watchlist/
    │   │   └──portfolio/
    ├──components/
    │   ├──aceternity-ui/
    │   ├──shadcn-ui/
    │   └──ui/
    ├──constants/
    ├──hooks/
    ├──lib/
    ├──prisma/
    ├──providers/
    ├──public/
    │   ├──avatars/
    │   ├──employees/
    │   ├──logos/
    │   ├──products/
    ├──scripts/
    ├──types/
    └──utils/
```

# Architecture

![High-Level Architecture](https://github.com/longleDevops/Financial-App/blob/main/doc/architecture.svg)

## Classes

![High-Level Architecture](https://github.com/longleDevops/Financial-App/blob/main/doc/class.svg)

# Status

The project is still in active development. Major UI changes are expected.

# Build

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
