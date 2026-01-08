import {dataAttr} from '@/sanity/lib/utils'

import Cta from '@/app/components/Cta'
import ReusableBlock from '@/app/components/ReusableBlock'
import React from 'react'

type BlockProps = {
  index: number
  block: any
  pageId: string
  pageType: string
}

type BlocksType = {
  [key: string]: React.FC<BlockProps>
}

const Blocks = {
    cta: Cta,
    reusableBlock: ReusableBlock,
} as BlocksType

export default function BlockRender({blocks, pageType, pageId}: {blocks: any[] | undefined, pageType: string, pageId: string}) {
  if (!blocks) {
    return null
  }

  return (
    <>
        {blocks.map((block, index) => (
            <div
                className="my-6 p-4 border border-gray-200 rounded"
                key={block._key}
                data-sanity={dataAttr({
                    id: pageId,
                    type: pageType,
                    path: `blocks[_key=="${block._key}"]`,
                }).toString()}
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
        ))}
    </>
  )
}
