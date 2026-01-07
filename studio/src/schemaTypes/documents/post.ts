import {DocumentTextIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineType} from 'sanity'
import {AutoSlugInput} from '../../components/AutoSlugInput'

export const post = defineType({
  name: 'post',
  title: 'Indlæg',
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
      name: 'thumbnail',
      title: 'Indlægsbillede',
      type: 'visual',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Indhold',
      type: 'blockContent',
    },    
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'thumbnail',
      category: 'tax_category.title',
    },
    prepare({title, media, date, category}) {
      const subtitles = [
        category && `${category}`,
        date && `${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' – ')}
    },
  },
})
