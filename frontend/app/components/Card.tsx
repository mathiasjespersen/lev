import type { Card } from "@/sanity.types"

export default function Card({block}: {block: Card}) {
  if (!block) {
    return null
  }

  return (
    <>
        <p>CARD</p>
    </>
  )
}
