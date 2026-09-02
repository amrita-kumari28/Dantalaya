import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">

      <div className="text-7xl">
        🦷
      </div>

      <h1 className="mt-6 text-5xl font-bold">
        404
      </h1>

      <p className="mt-6 text-lg text-center">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="
          mt-8
          rounded-lg
          bg-primary
          px-6
          py-3
          text-white
        "
      >
        Back to Home
      </Link>

    </div>
  );
}