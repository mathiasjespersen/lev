import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {moreArticlesQuery, allArticlesQuery} from '@/sanity/lib/queries'
import {AllArticlesQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import OnBoarding from '@/app/components/Onboarding'
import {dataAttr} from '@/sanity/lib/utils'

const Article = ({article}: {article: AllArticlesQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, author} = article

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'article', path: 'title'}).toString()}
      key={_id}
      className="border border-gray-200 rounded-sm p-6 bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative"
    >
      <Link className="hover:text-brand underline transition-colors" href={`/artikel/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="text-2xl mb-4">{title}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600 max-w-[70ch]">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <time className="text-gray-500 text-xs font-mono" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Articles = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <>{children}</>
)

export const MoreArticles = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: moreArticlesQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Articles heading={`Recent Articles (${data?.length})`}>
      {data?.map((article: AllArticlesQueryResult[number]) => (
        <Article key={article._id} article={article} />
      ))}
    </Articles>
  )
}

export const AllArticles = async () => {
  const {data} = await sanityFetch({query: allArticlesQuery})

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Articles>
      {data.map((article: AllArticlesQueryResult[number]) => (
        <Article key={article._id} article={article} />
      ))}
    </Articles>
  )
}

