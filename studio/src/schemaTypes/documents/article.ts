import {DocumentTextIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineType} from 'sanity'
import {AutoSlugInput} from '../../components/AutoSlugInput'

export const article = defineType({
  name: 'article',
  title: 'Artikel',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is required for the article to show up in the preview',
      components: {
        input: AutoSlugInput,
      },
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'postImage',
      title: 'Post Image',
      type: 'visual',
    },
    {
      name: 'thumbnail',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },    
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'thumbnail',
    },
    prepare({title, media, date}) {
      const subtitles = [
        'Kategori',
        date && `${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' • ')}
    },
  },
})
