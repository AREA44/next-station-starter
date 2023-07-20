import Bridge from '@/components/Brigde';
import Gallery from '@/components/Gallery';

const title = 'NEXT VALHALLA STARTER';
const description = 'An image gallery starter built with Next.js.';
const author = 'AREA44';
const authorURL = 'https://github.com/AREA44/next-valhalla-starter';

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="after:content shadow-highlight after:shadow-highlight relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest">
              {title}
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              {description}
            </p>
          </div>
          <Gallery />
        </div>
      </main>
      <footer className="flex flex-col justify-between space-y-4 p-6 text-center text-white/80 sm:p-12">
        <div>
          made with love by{' '}
          <a
            href={authorURL}
            target="_blank"
            className="font-semibold hover:text-white"
            rel="noreferrer"
          >
            {author}
          </a>
        </div>
      </footer>
    </>
  );
}
