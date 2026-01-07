import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <>
      <div className="lev-grid gap-y-36">

        <div className="col-span-12 lev-subgrid gap-y-10">
          <div className="col-span-12">
            <div className="border-t border-[#E5E3E1] pt-2 flex justify-between">
              <h2 className="lev-text-lg">Grid</h2>
              <h3 className="lev-text-sm">
                <span className="opacity-30">Current breakpoint: </span>
                <span className="sm:hidden">xs</span>
                <span className="hidden sm:inline-block md:hidden">sm</span>
                <span className="hidden md:inline-block lg:hidden">md</span>
                <span className="hidden lg:inline-block xl:hidden">lg</span>
                <span className="hidden xl:inline-block">xl</span>
              </h3>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-subgrid sm:hidden">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="col-span-3">
                <div className="h-80 bg-black/10"></div>
              </div>
            ))}
          </div>
          <div className="col-span-12 grid grid-cols-subgrid max-sm:hidden">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="col-span-1">
                <div className="h-80 bg-black/10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lev-subgrid gap-y-10">
          <div className="col-span-12">
            <div className="border-t border-[#E5E3E1] pt-2 flex justify-between">
              <h2 className="lev-text-lg">Typography</h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 sm:col-start-4">
            <div className="flex flex-col gap-24">
              {[
                { className: 'lev-heading-2xl', title: 'H0 headline', label: '.lev-heading-2xl' },
                { className: 'lev-heading-xl', title: 'H1 headline', label: '.lev-heading-xl' },
                { className: 'lev-heading-lg', title: 'H2 headline', label: '.lev-heading-lg' },
                { className: 'lev-heading-md', title: 'H3 headline', label: '.lev-heading-md' },
                { className: 'lev-heading-md italic', title: 'H3 headline liste', label: '.lev-heading-md .italic' },
                { className: 'lev-text-lg', title: 'Manchet text — Lev tager beskyttelse af dine personoplysninger meget alvorligt. Vi har derfor vedtaget denne privatlivspolitik, hvor du kan finde information om, hvordan vi behandler dine personoplysninger. Personoplysninger er alle slags oplysninger, der direkte eller indirekte kan henføres til dig som privatperson.', label: '.lev-text-lg' },
                { className: 'lev-text-md', title: 'Bliv frivillig', label: '.lev-text-md' },
                { className: 'lev-text-sm', title: 'Thistedgade 10, 1. tv., 2630 Taastrup', label: '.lev-text-sm' },
              ].map((item, index) => (
                <div key={index} className={`flex flex-col gap-y-2 items-start ${item.className}`}>
                  {item.title}
                  {item.label && <div className="bg-[#eee] p-1 text-base font-sans font-normal not-italic inline">{item.label}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
