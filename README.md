# Next Valhalla Starter

Next Valhalla Starter is an image gallery starter built with [Next.js](https://nextjs.org).

## Running Locally

To run the application locally, make sure you have Node.js v18+ installed on your machine.

```bash
git clone https://github.com/AREA44/next-valhalla-starter
cd next-valhalla-starter
pnpm install
pnpm dev
```

## Quick Start

### Add Your Gallery

To add your own image gallery, simply place your photos inside the `public/gallery` directory. Next.js will automatically detect these photos and display them on your website.

### Change Site Information

To change your site information, update the following files:
- `app/layout.tsx`: This file contains information about your website's title, description, URL, favicon, etc. Update the corresponding values in this file.
- `app/page.tsx`: This file contains additional information about your website. Update the values according to your requirements.

You can also update the favicon, Open Graph image, and Twitter image in the `app` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Credits

Next Valhalla Starter is inspired by the [Image Gallery Starter](https://vercel.com/templates/next.js/image-gallery-starter) and [shadcn/ui](https://ui.shadcn.com) projects.
