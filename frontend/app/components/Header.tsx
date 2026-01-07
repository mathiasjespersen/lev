import Link from 'next/link'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import LogoLev from '@/app/components/Logo'

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <header className="fixed z-50 h-24 inset-0 flex items-center">
      <div className="lev-grid w-full">
        <div className="col-span-12 flex items-center justify-between gap-5">
      
          <Link href="/">
            <LogoLev className="text-[#100E62]" />
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight"
            >
              {[
                { href: '/indlaeg', label: 'Indlæg' },
                { href: '/artikel', label: 'Artikler' },
                { href: '/submit-content', label: 'Indsend artikel' }
                ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                  {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
        </div>
      </div>
    </header>
  )
}
