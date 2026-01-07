import {BlockElementIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const blockElement = defineType({
  name: 'blockElement',
  title: 'Blokke',
  icon: BlockElementIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'block',
      title: 'Blok',
      type: 'blockVariant',
      validation: (rule) => rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {title}
    },
  },
})
