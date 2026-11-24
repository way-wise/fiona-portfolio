"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Main layout error caught:", error);
  }, [error]);

  return (
    <div className="grid grow place-items-center p-8 min-h-[50vh]">
      <div className="space-y-4 text-center max-w-lg">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          Something went wrong!
        </h2>
        {error?.message && (
          <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-mono text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
            {error.message}
          </p>
        )}
        <Button
          onClick={() => reset()}
          variant="outline"
          className="rounded-full"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
