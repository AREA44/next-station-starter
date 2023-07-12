import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Bridge from '@/components/Brigde';
import Gallery from '@/app/gallery';

const title = 'NEXT VALHALLA STARTER';
const description = 'An image gallery starter built with Next.js.';
const author = 'AREA44';
const authorURL = 'https://github.com/AREA44';

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[500px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mb-4 mt-8 font-bold uppercase tracking-widest">
              {title}
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              {description}
            </p>
          </div>
          {Gallery.map(({ src, height, width, base64 }) => (
            <Dialog>
              <DialogTrigger asChild>
                <AspectRatio
                  ratio={3 / 2}
                  className="after:content after:shadow-highlight group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                >
                  <Image
                    src={src}
                    alt="Unsplash photo"
                    className="transform rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
                    fill
                  />
                </AspectRatio>
              </DialogTrigger>
              <DialogContent className="p-9">
                <Image
                  key={src}
                  alt="Unsplash photo"
                  src={src}
                  placeholder="blur"
                  blurDataURL={base64}
                  height={height}
                  width={width}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        made with ❤️ by{' '}
        <a
          href={authorURL}
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          {author}
        </a>
      </footer>
    </>
  );
}
