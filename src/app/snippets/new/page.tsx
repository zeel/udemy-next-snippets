"use client";

import { useActionState, startTransition } from "react";
import * as actions from "@/actions";

export default function CreateSnippetPage() {
  const [formState, action] = useActionState(actions.createSnippet, {
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      action(formData);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold mb-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full  dark:bg-gray-900 outline-none"
            id="title"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full dark:bg-gray-900 outline-none"
            id="code"
          />
        </div>
        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 dark:bg-red-900 border rounded border-red-400">
            {formState.message}
          </div>
        ) : null}
        <button
          type="submit"
          className="rounded p-2 bg-blue-200 dark:bg-blue-400 dark:text-black"
        >
          Create
        </button>
      </div>
    </form>
  );
}
