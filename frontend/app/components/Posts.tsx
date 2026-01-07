import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery, allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import OnBoarding from '@/app/components/Onboarding'
import {dataAttr} from '@/sanity/lib/utils'

const Article = ({article}: {article: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, category} = article

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
      key={_id}
      className="border border-gray-200 rounded-sm bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative"
    >
      <Link className="block p-6" href={`/indlaeg/${slug}`}>
        <div className="flex flex-col gap-y-2 items-start">
          <h3 className="text-2xl">{title}</h3>
          {article.category && <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{article.category}</span>}
          <p className="line-clamp-3 text-sm leading-6 text-gray-600 max-w-[70ch]">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <time className="text-gray-500 text-xs font-mono" dateTime={date}>
            <DateComponent dateString={date} />
          </time>
        </div>
      </Link>
    </article>
  )
}

const Articles = ({
  children,
  heading,
}: {
  children: React.ReactNode
  heading?: string
}) => (
  <>
    {heading && (
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {heading}
      </h2>
    )}
    {children}
  </>
)

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Articles heading={`Recent Articles (${data?.length})`}>
      {data?.map((article: AllPostsQueryResult[number]) => (
        <Article key={article._id} article={article} />
      ))}
    </Articles>
  )
}

export const AllPosts = async () => {
  const {data} = await sanityFetch({query: allPostsQuery})

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Articles>
      {data.map((article: AllPostsQueryResult[number]) => (
        <Article key={article._id} article={article} />
      ))}
    </Articles>
  )
}

