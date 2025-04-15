import { glob } from "glob";
import Image from "next/image";
import sharp from "sharp";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

async function fetchImageMetadata(pattern: string) {
  try {
    const files = glob.sync(pattern, { posix: true });
    const imagePromises = files.map(async (file) => {
      try {
        const src = file.replace("public", "");
        const metadata = await sharp(file).metadata();
        if (!metadata) throw new Error(`Failed to fetch metadata for ${file}`);
        const { width, height, format } = metadata;
        const mimeType = format === "jpeg" ? "jpg" : format; // Normalize MIME type
        const buffer = await sharp(file)
          .resize(10, 10, { fit: "inside" })
          .toBuffer();
        const base64 = `data:image/${mimeType};base64,${buffer.toString("base64")}`;
        return { src, width, height, base64 };
      } catch (err) {
        console.warn(`Skipping image ${file}:`, err);
        return null;
      }
    });

    // Return filtered images that were successfully processed
    return (await Promise.all(imagePromises)).filter(Boolean);
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
            loading="lazy" // Lazy load for non-essential images
          />
        </AspectRatio>
      </DialogTrigger>
      <DialogContent
        className={`${
          height > width ? "max-w-[400px]" : "max-w-[600px]"
        } rounded-lg p-0`}
      >
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
        <Image
          src={src}
          placeholder="blur"
          blurDataURL={base64}
          height={height}
          width={width}
          alt="Photo from Unsplash"
          className="rounded-lg object-contain"
          loading="lazy" // Lazy load the modal content
        />
      </DialogContent>
    </Dialog>
  ));
};

export default Gallery;
