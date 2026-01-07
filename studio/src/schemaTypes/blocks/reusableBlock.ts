import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'reusableBlock',
    type: 'object',
    description: 'Genanvendelig blok',
    fields: [
        defineField({
            name: 'blockContent',
            title: 'Blok indhold',
            type: 'reference',
            to: [{type: 'reusableBlocks'}],
            validation: (rule) => rule.required(),
        }),
    ],
    options: {collapsible: true},
})
