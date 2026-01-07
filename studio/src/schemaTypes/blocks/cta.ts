import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  type: 'object',
  description: 'Call to action',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      options: {collapsible: true, collapsed: false},
    }),
  ],
  options: {collapsible: true},
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'CTA',
        subtitle: 'Call to Action',
      }
    },
  },
})
