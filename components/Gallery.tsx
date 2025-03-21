import Image from "next/image";
import { glob } from "glob";
import sharp from "sharp";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

async function fetchImageMetadata(pattern: string) {
  try {
    const files = glob.sync(pattern, { posix: true });
    const imagePromises = files.map(async (file) => {
      const src = file.replace("public", "");
      const metadata = await sharp(file).metadata();
      if (!metadata) throw new Error("Failed to fetch metadata for " + file);
      const { width, height, format } = metadata;
      const buffer = await sharp(file)
        .resize(10, 10, {
          fit: "inside",
        })
        .toBuffer();
      const base64 = `data:image/${format};base64,${buffer.toString("base64")}`;
      return { src, width, height, base64 };
    });
    return await Promise.all(imagePromises);
  } catch (error) {
    console.error("Error fetching image metadata:", error);
    return [];
  }
}

const Gallery = async () => {
  const images = await fetchImageMetadata(
    "public/gallery/*.{jpg,jpeg,png,webp}",
  );

  return images.map(({ src, height, width, base64 }) => (
    <Dialog key={src}>
      <DialogTrigger asChild>
        <AspectRatio
          ratio={3 / 2}
          className="group relative cursor-zoom-in overflow-hidden rounded-lg after:pointer-events-none after:absolute after:inset-0"
        >
          <Image
            src={src}
            placeholder="blur"
            blurDataURL={base64}
            alt="Photo from Unsplash"
            className="object-cover transition will-change-auto group-hover:scale-110"
            fill
          />
        </AspectRatio>
      </DialogTrigger>
      <DialogContent
        className={`${
          height > width == true ? "max-w-[400px]" : "max-w-[600px]"
        } rounded-lg p-0`}
      >
        <Image
          src={src}
          placeholder="blur"
          blurDataURL={base64}
          height={height}
          width={width}
          alt="Photo from Unsplash"
          className="rounded-lg object-contain"
        />
      </DialogContent>
    </Dialog>
  ));
};

export default Gallery;
