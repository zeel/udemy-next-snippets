import { db } from "@/db";
import { redirect } from "next/navigation";
export default function CreateSnippetPage() {
  async function onFormSubmit(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const code = formData.get("code");
    if (!title || !code) return;

    const snippet = await db.snippet.create({
      data: {
        title: title as string,
        code: code as string,
      },
    });
    console.log(snippet);

    redirect("/");
  }
  return (
    <form action={onFormSubmit}>
      <h3 className="font-bold mb-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
