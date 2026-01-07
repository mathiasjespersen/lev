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
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({title, images}) {
      const imageCount = Array.isArray(images) ? images.length : 0
      return {
        title: title || 'Galleri',
        subtitle: `${imageCount} billede${imageCount !== 1 ? 'r' : ''}`,
      }
    },
  },
})
