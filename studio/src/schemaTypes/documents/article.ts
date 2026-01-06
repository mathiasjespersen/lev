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
      name: 'tax_category',
      title: 'Kategori',
      type: 'reference',
      to: [{type: 'tax_category'}],      
      options: {disableNew: true},
    },
    {
      name: 'postImage',
      title: 'Post Image',
      type: 'visual',
    },
    // Temporary show MUX video
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video',
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
      media: 'postImage',
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
