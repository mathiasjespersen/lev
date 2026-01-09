import {GetPageQueryResult, SanityImageAssetReference, SanityImageCrop, SanityImageHotspot} from '@/sanity.types'

export type PageBuilderSection = NonNullable<NonNullable<GetPageQueryResult>['pageBuilder']>[number]
export type ExtractPageBuilderType<T extends PageBuilderSection['_type']> = Extract<
  PageBuilderSection,
  {_type: T}
>

// Represents a Link after GROQ dereferencing (page/post become slug strings)
export type DereferencedLink = {
  _type: 'link'
  linkType?: 'href' | 'page' | 'post' | 'article'
  href?: string
  page?: string | null
  post?: string | null
  article?: string | null
  openInNewTab?: boolean
}

export type DereferencedVisual = {
  _type: 'visual'
  mediaType?: 'image' | 'video'
  image?: {
    asset?: any
    _type: 'image'
  } | null
  video?: any
}