import {Suspense} from 'react'

import {AllArticles} from '@/app/components/Articles'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <>
      <div className="relative">
        <div className="container">
          <aside>
            <Suspense>{await AllArticles()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  )
}
