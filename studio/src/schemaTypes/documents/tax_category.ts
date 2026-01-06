import {defineType, defineField} from 'sanity'
import {AutoSlugInput} from '../../components/AutoSlugInput'

export const tax_category = defineType({
  name: 'tax_category',
  title: 'Kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {
        input: AutoSlugInput,
      },
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
