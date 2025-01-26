import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <p className="text-sm text-muted-foreground">404</p>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Page not found
      </h2>
      <p className="mb-4 leading-7 [&:not(:first-child)]:mt-6">
        Sorry, we could not find the page you are looking for.
      </p>
      <Link href="/" className={buttonVariants()}>
        {" "}
        Go back home
      </Link>
    </div>
  );
}
