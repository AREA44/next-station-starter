"use client";

import { Button } from "@/components/ui/button";
import { type JSX, useEffect } from "react";

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center text-center"
      role="alert"
    >
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Something went wrong!
      </h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
