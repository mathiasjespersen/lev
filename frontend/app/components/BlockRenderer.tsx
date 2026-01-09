import Cta from '@/app/components/Cta'
import ReusableBlock from '@/app/components/ReusableBlock'
import Card from '@/app/components/Card'
import React from 'react'

type BlocksType = {
    [key: string]: React.ComponentType<any>
}

const Blocks = {
    cta: Cta,
    reusableBlock: ReusableBlock,
    card: Card
} as BlocksType

export function Block({block, pageType, pageId, index}: {block: any | undefined, pageType: string, pageId: string, index?: number}) {
  if (!block) {
    return null
  }

  return (
    <div
        className="my-6 p-4 border border-gray-200 rounded"
        key={block._key}
    >
        {block.variant && typeof Blocks[block.variant[0]._type] !== 'undefined' ? (
            React.createElement(Blocks[block.variant[0]._type], {
                key: block._key,
                block: block,
                index: index,
                pageId: pageId,
                pageType: pageType,
            })
        ) : (
            <div className="w-full bg-gray-100 text-center text-gray-500 p-20 rounded">
                A &ldquo;{block.variant[0]._type}&rdquo; block hasn&apos;t been created
            </div>
        )}
    </div>
  )
}

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

  return (
    <>
      {blocks.map((block, index) => (
        <Block
          key={block._id || index}
          block={block}
          index={index}
          pageType={pageType}
          pageId={pageId}
        />
      ))}
    </>
  )
}
