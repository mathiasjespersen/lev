import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

const visualFields = /* groq */ `
  ...,
  image{
    ...,
    asset->{
      _id,  
      ...
    }
  },
  video {
    asset-> {
      playbackId,
      data {
        aspect_ratio
      }
    }
  }
`

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  thumbnail,
  "category": tax_category->title,
  "topic": topic->title,
  "date": coalesce(date, _updatedAt),
`
const articleFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  thumbnail,
  "category": tax_category->title,
  "topic": topic->title,
  "date": coalesce(date, _updatedAt),
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current,
    "article": article->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current) || _type == "article" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)


export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`)


export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`)

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`)



export const allArticlesQuery = defineQuery(`
  *[_type == "article" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${articleFields}
  }
`)

export const moreArticlesQuery = defineQuery(`
  *[_type == "article" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${articleFields}
  }
`)

export const articleQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug] [0] {
    contentWithBlocks[]{
      ...,
      _type == "blockVariantWithReusableBlock" => {
        ...,
        variant[]{
          ...,
          blockContent->{
            ...
          }
        }
      }
    },
    blocks[]{
      variant[]{
        ...,
        blockContent->{
          ...
        }
      }
    },
    postImage{
      ${visualFields}
    },
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${articleFields}
  }
`)



export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`)

export const articlePagesSlugs = defineQuery(`
  *[_type == "article" && defined(slug.current)]
  {"slug": slug.current}
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)
