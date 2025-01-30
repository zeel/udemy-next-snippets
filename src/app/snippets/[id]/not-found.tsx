import Link from "next/link";

export default function SnippetNotFoundPage() {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-8 justify-center items-center h-full">
        <h3 className="text-bold text-2xl">
          Sorry, We could not find that particular snippet
        </h3>
        <Link href="/" className="border rounded text-blue-500 p-2">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
