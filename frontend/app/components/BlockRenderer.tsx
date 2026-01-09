import Block from '@/app/components/Block';

type BlockProps = {
  index: number
  block: any
  pageId: string
  pageType: string
}

export default function BlockRender({blocks, pageType, pageId}: {blocks: any[] | undefined, pageType: string, pageId: string}) {
  if (!blocks) {
    return null
  }

  console.log('BLOCKS TO RENDER:', blocks);

  return (
    <>
      {blocks.map((block, index) => (
        <Block
          key={block._key}
          block={block}
          index={index}
          pageType={pageType}
          pageId={pageId}
        />
      ))}
    </>
  )
}
