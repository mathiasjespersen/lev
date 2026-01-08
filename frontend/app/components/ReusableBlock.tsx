import { sanityFetch } from "@/sanity/lib/live";
import Block from '@/app/components/Block';

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

  console.log('REUSABLE BLOCK:', block.variant[0].blockContent.block.variant[0]);

  return (
    <>
        <p>Resuable block "{block.variant[0].blockContent.block.variant[0].title}"</p>
        <Block block={block.variant[0].blockContent.block} pageType="reusableBlock" pageId={block._id} />
    </>
  )
}
