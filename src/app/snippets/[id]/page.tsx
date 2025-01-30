import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import * as actions from "@/actions";

interface IViewSnippetPage {
  params: { id: string };
}

export default async function ViewSnippetPage(props: IViewSnippetPage) {
  const params = await props.params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) || -1 },
  });

  if (!snippet) {
    return notFound();
  }
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-bold text-xl">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border rounded text-blue-500 p-2"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="border rounded p-2">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200 dark:text-white dark:bg-gray-900 dark:border-gray-900">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
