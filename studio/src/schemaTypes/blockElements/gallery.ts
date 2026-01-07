import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  type: 'object',
  description: 'Galleri',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Billeder',
      type: 'array',
      of: [{type: 'visual'}],
    }),
  ],
  options: {collapsible: true},
})
