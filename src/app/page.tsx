import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <>
      <div className="flex justify-between items-center my-8">
        <div className="text-bold text-xl">Snippets</div>
        <Link className="border rounded text-blue-500 p-2" href="/snippets/new">
          Add New
        </Link>
      </div>
      <ol className="list-decimal flex flex-col gap-2">
        {snippets.map(({ id, title }) => (
          <li key={id}>
            <Link
              href={`/snippets/${id}`}
              className="flex justify-between items-center p-2 border rounded"
            >
              <div>{title}</div>
              <div>View</div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
