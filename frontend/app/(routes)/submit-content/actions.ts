"use server"

import {uuid} from "@sanity/uuid"
import {client} from "@/sanity/lib/client"

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export async function submitArticle(formData: FormData) {
  const title = formData.get("title")?.toString().trim()
  const body = formData.get("body")?.toString().trim()

  if (!title || !body) {
    throw new Error("Title and body are required")
  }

  const slug = slugify(title)

  await client.create({
    _id: `drafts.${uuid()}`,
    _type: "article",
    title,
    slug: {current: slug},
    date: new Date().toISOString(),
    excerpt: body.slice(0, 200),
    content: [
      {
        _key: uuid(),
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: uuid(),
            _type: "span",
            text: body,
            marks: [],
          },
        ],
      },
    ],
  })
}
