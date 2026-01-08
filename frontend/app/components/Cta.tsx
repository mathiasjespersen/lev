import type { Cta } from "@/sanity.types"

export default function Cta({block}: {block: Cta}) {
  if (!block) {
    return null
  }

  return (
    <>
        <p>CTA</p>
    </>
  )
}
