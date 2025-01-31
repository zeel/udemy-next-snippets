import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
interface IEditSnippetPage {
  params: Promise<{ id: string }>;
}
export default async function SnippetEditPage(props: IEditSnippetPage) {
  const params = await props.params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params?.id) || -1 },
  });

  if (!snippet) return notFound();

  return (
    <div>
      {snippet.title}
      <div className="mt-4">
        <SnippetEditForm snippet={snippet} />
      </div>
    </div>
  );
}
