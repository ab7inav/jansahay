"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-jansahay-bg flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-jansahay-red/10 rounded-full flex items-center justify-center text-jansahay-red mb-8">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-jansahay-navy mb-4">Something went wrong!</h1>
          <p className="text-jansahay-text-secondary max-w-md mx-auto mb-8">
            We've encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 bg-jansahay-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-jansahay-navy/90 transition-colors shadow-sm"
          >
            <RefreshCw className="w-5 h-5" />
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
