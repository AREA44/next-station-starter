import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export type Photos = {
  src: string;
  width: number;
  height: number;
  base64: string;
};

const Photos: Photos[] = [
  {
    src: '/gallery/angelo-pantazis-h0AnGGgseio-unsplash.jpg',
    width: 1703,
    height: 2560,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ADKuwC6qujSwxACE1t2Uq6KB2+MAspF9v4hl//jnACADACEAALqVhKdeE5PmK4BNAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/di_an_h-9jsV5uKbAEM-unsplash.jpg',
    width: 2560,
    height: 1688,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AGaC8pS7/5K3/5Gq/wA8W8bqtYf/7MR/lf8AO1vBAA1NADF+gZv/yoYVa5nWjzEAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/heather-ford-vAfCO8xrz0I-unsplash.jpg',
    width: 1707,
    height: 2560,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AIDp/57+/5Ty/wB/5/8ALTkUh6UAAHCDABgei/j/AF/d/2Di/3v0/77eFikjbFW0AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/jordan-whitfield-3cNc1U7nJcs-unsplash.jpg',
    width: 2048,
    height: 2560,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4Pz//f4Xf/wB9hv898Q4MDF/keRj+z89/bKx+h4GF4X+o8WQGhhoGBgBqOg9a/DvFswAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/sean-foley-0JD7kvxAq0Y-unsplash.jpg',
    width: 2048,
    height: 2560,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAAwRQA3UgAlOwDL2v7F2P/n//8Az+7/6vv/g63QAAAIJzNReAArTHRTEsXwohFQAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/sean-foley-z4gWzj0p93c-unsplash.jpg',
    width: 2048,
    height: 2560,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/ACZWaQAJJgAJIgAAJzRwQnqBaZ8AS32Xu87+mbvpAL3Y/8X//26jxfPuEaA9S2GRAAAAAElFTkSuQmCC',
  },
];

export default function Gallery() {
  return Photos.map(({ src, height, width, base64 }) => (
    <Dialog>
      <DialogTrigger asChild>
        <AspectRatio
          ratio={3 / 2}
          className="after:content after:shadow-highlight group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
        >
          <Image
            src={src}
            alt="Unsplash photo"
            className="rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
            fill
          />
        </AspectRatio>
      </DialogTrigger>
      <DialogContent className="max-h-screen w-full p-0">
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
  ));
}
