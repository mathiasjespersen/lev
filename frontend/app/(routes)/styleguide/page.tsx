import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import Entry from '@/app/components/blocks/Entry'
import Cta from '@/app/components/blocks/Cta'
import Cards from '@/app/components/blocks/Cards'

const colorGroups = [
  {
    name: 'Blå',
    colors: [
      {label: 'Blå 4', className: 'bg-blue-100'},
      {label: 'Blå (Tweaked)', className: 'bg-blue-200'},
      {label: 'Blå 3', className: 'bg-blue-300'},
      {label: 'Blå 2', className: 'bg-blue-500'},
      {label: 'Blå 1', className: 'bg-blue-700'},
    ],
  },
  {
    name: 'Varm grå',
    colors: [
      {label: 'Varm grå (bg)', className: 'bg-gray-50'},
      {label: 'Varm grå 4', className: 'bg-gray-100'},
      {label: 'Varm grå 3', className: 'bg-gray-300'},
      {label: 'Varm grå 3', className: 'bg-gray-500'},
      {label: 'Varm grå 1', className: 'bg-gray-700'},
      {label: 'Varm grå (text)', className: 'bg-gray-800'},
    ],
  },
  {
    name: 'Violet',
    colors: [
      {label: 'Violet 4', className: 'bg-violet-100'},
      {label: 'Violet 3', className: 'bg-violet-300'},
      {label: 'Violet 2', className: 'bg-violet-500'},
      {label: 'Violet 1', className: 'bg-violet-700'},
    ],
  },
  {
    name: 'Pink',
    colors: [
      {label: 'Pink 4', className: 'bg-pink-100'},
      {label: 'Pink 3', className: 'bg-pink-300'},
      {label: 'Pink 2', className: 'bg-pink-500'},
      {label: 'Pink 1', className: 'bg-pink-700'},
    ],
  },
  {
    name: 'Orange',
    colors: [
      {label: 'Orange 100', className: 'bg-orange-100'},
      {label: 'Orange (Tweaked)', className: 'bg-orange-200'},
      {label: 'Orange 300', className: 'bg-orange-300'},
      {label: 'Orange 500', className: 'bg-orange-500'},
      {label: 'Orange 700', className: 'bg-orange-700'},
    ],
  },
  {
    name: 'Grøn',
    colors: [
      {label: 'Grøn 4', className: 'bg-green-100'},
      {label: 'Grøn 3', className: 'bg-green-300'},
      {label: 'Grøn 2', className: 'bg-green-500'},
      {label: 'Grøn 1', className: 'bg-green-700'},
    ],
  },
  {
    name: 'Turkis',
    colors: [
      {label: 'Turkis 4', className: 'bg-turquoise-100'},
      {label: 'Turkis 3', className: 'bg-turquoise-300'},
      {label: 'Turkis 2', className: 'bg-turquoise-500'},
      {label: 'Turkis 1', className: 'bg-turquoise-700'},
    ],
  },
]

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <>
      <div className="lev-grid gap-y-36">

        <Entry/>

        <Cta variant="quote"/>

        <Cards/>

        <Cta/>

        <div className="col-span-12 lev-subgrid gap-y-10">
          <div className="col-span-12">
            <div className="border-t border-gray-100 pt-2 flex justify-between">
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
            <div className="border-t border-gray-100 pt-2 flex justify-between">
              <h2 className="lev-text-lg">Colors</h2>
            </div>
          </div>
          <div className="col-span-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {colorGroups.map((group) => (
              <div key={group.name} className="space-y-4">
                <h3 className="lev-text-sm">{group.name}</h3>
                <div className="space-y-3">
                    {group.colors.slice().reverse().map((color) => (
                      <div key={color.className} className="flex items-center gap-3">
                        <div className={`h-10 w-16 rounded ${color.className}`} />
                        <div className="flex flex-col">
                          <span className="lev-text-sm">{color.label}</span>
                          <span className="text-xs font-mono text-gray-300">.{color.className}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lev-subgrid gap-y-10">
          <div className="col-span-12">
            <div className="border-t border-gray-100 pt-2 flex justify-between">
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
                  {item.label && <div className="font-normal not-italic inline text-xs font-mono text-gray-300">{item.label}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
