import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visual',
  type: 'object',
  description: 'Displays an image or video loop',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
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
      type: 'file',
      hidden: ({parent}) => parent?.mediaType !== 'video',
      description: 'Upload a video file (MP4 format recommended)',
      options: {
        accept: 'video/mp4,video/webm,video/ogg',
      },
    }),
  ],
  options: {collapsible: true},
})
