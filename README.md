# Next Valhalla Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/8734ce79-5346-4f4a-82b6-47b0de3e63a8/deploy-status)](https://app.netlify.com/sites/next-valhalla-starter/deploys)

An image gallery starter built with [Next.js](https://nextjs.org).

## Running locally

This application requires Node.js v18+.

```sh
git clone https://github.com/AREA44/next-valhalla-starter
cd next-valhalla-starter
pnpm install
pnpm dev
```

## Quick Start

### Add your gallery

To add your gallery, place your photos inside the `public/gallery` directory. Next.js will automatically pick up the photos in this directory and display them on your website.

### Change site information

To change your site information, you need to update the following files `app/layout.tsx` and `app/page.tsx`. In these files, you will find information about your website like title, description, url, favicon etc. Simply update the corresponding value.

You also update the favicon, Open Graph image
and Twitter image in the `app` directory too.

## License

Licensed under the [MIT](LICENSE) license.

## Credits

Inspired by [Image Gallery Starter](https://vercel.com/templates/next.js/image-gallery-starter) and [shadcn/ui](https://ui.shadcn.com).
