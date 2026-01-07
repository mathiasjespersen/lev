import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visual',
  type: 'object',
  description: 'Viser et billede eller videoloop',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Type',
      type: 'string',
      // initialValue: 'image',
      options: {
        list: [
          {title: 'Billede', value: 'image'},
          {title: 'Videoloop', value: 'video'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({parent}) => parent?.mediaType !== 'image',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      hidden: ({parent}) => parent?.mediaType !== 'video',
    }),
  ],
  options: {collapsible: true},
})
