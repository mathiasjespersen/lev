import { sanityFetch } from "@/sanity/lib/live";

const getBlock = async (ref: string) => {
    const [{data}] = await Promise.all([sanityFetch({query: `*[_id == "${ref}"][0] {
        ...,
    }`})])
    return data || null;
}

export default async function ReusableBlock({block}: {block: any}) {
  if (!block.variant) {
    return null
  }

  console.log('ReusableBlock block:', block.variant[0].blockContent._ref)

  const blockData = await getBlock(block.variant[0].blockContent._ref);

  console.log('ReusableBlock block:', blockData)

  return (
    <>
        <p>Resuable block "{blockData?.title}"</p>
    </>
  )
}
