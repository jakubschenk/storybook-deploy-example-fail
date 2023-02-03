This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Storybook deployment issue with Next.js application

Try to deploy this repository on Vercel, use one deployment with Next.js framework preset, this deploys the base applications and works fine.
However when attempting to deploy the storybook part of this repository with the following config:
Framework: Other
Build command: npm run build-storybook
Build directory: storybook-static
Install command: npm ci

The builder invokes middleware from the root of the project and tries to include it in the storybook deployment, which fails.
