'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <div className="bg-gray-100 px-2 text-center">
          <div className="h-screen flex flex-col justify-center items-center space-y-4">
            <h1 className="text-8xl font-extrabold text-red-500">500</h1>
            <p className="text-4xl font-medium ">Internal Server Error</p>
            <p className="text-2xl font-medium ">{error.message}</p>
            <p className="text-xl text-gray-800 mt-4">
              We apologize for the inconvenience. Please try again later.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
