# Nextjs Custom loader issue repro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to repro

```bash
pnpm install
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can see the issue below:

```
TypeError: Cannot use 'in' operator to search for '__next_img_default' in undefined
```
