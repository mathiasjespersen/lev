import type {Metadata, ResolvingMetadata} from 'next'
import {notFound} from 'next/navigation'
import {type PortableTextBlock} from 'next-sanity'
import {Suspense} from 'react'

import Visual from '@/app/components/Visual'
import {MoreArticles} from '@/app/components/Articles'
import PortableText from '@/app/components/PortableText'
import {sanityFetch} from '@/sanity/lib/live'
import {articlePagesSlugs, articleQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'
import BlockRender from '@/app/components/BlockRenderer'

type Props = {
  params: Promise<{slug: string}>
}

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: articlePagesSlugs,
    // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params
  const {data: article} = await sanityFetch({
    query: articleQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(article?.thumbnail)

  return {
    title: article?.title,
    description: article?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata
}

export default async function ArticlePage(props: Props) {
  const params = await props.params
  const [{data: article}] = await Promise.all([sanityFetch({query: articleQuery, params})])

  if (!article?._id) {
    return notFound()
  }

  return (
    <>
      <div className="">
        <div className="container my-12 lg:my-24 grid gap-12">
          <div>
            <div className="pb-6 grid gap-6 mb-6 border-b border-gray-100">
              <div className="max-w-3xl flex flex-col gap-6 items-start">
                <h1 className="text-4xl text-gray-900 sm:text-5xl lg:text-7xl">{article.title}</h1>
                {article.category && <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{article.category}</span>}
              </div>
            </div>
            <article className="gap-6 grid max-w-4xl">
              <div className='my-10'>
                {/* {article.contentWithBlocks?.length && (
                  <PortableText
                    className="max-w-2xl prose-headings:font-medium prose-headings:tracking-tight"
                    value={article.contentWithBlocks as PortableTextBlock[]}
                    pageType="article"
                    pageId={article._id}
                  />
                )} */}
              </div>
              <div className='my-10'>
                {article.blocks && (
                  <BlockRender
                    blocks={article.blocks}
                    pageType="article"
                    pageId={article._id}
                  />
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container py-12 lg:py-24 grid gap-12">
          <aside>
            <Suspense>{await MoreArticles({skip: article._id, limit: 2})}</Suspense>
          </aside>
        </div>
      </div>
    </>
  )
}