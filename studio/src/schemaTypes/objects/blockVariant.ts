import {defineType} from 'sanity'

const blocks = [
    {
        title: 'CTA',
        value: 'cta',
    },
    {
        title: 'Galleri',
        value: 'gallery',
    },
]

export const blockVariant = defineType({
    name: 'blockVariant',
    title: 'Block Variant',
    type: 'object',
    fields: [
        {
            name: 'variant',
            title: 'Valgte blok',
            type: 'string',
            options: {
                list: blocks,
                layout: 'radio',
                direction: 'horizontal',
            },
            validation: (Rule) => Rule.required(),
        },
        ...blocks.map((block) => ({
            name: block.value,
            title: block.title,
            type: block.value,
            hidden: ({parent}: {parent?: {variant?: string}}) => parent?.variant !== block.value,
        })),
    ],
    preview: {
        select: {
            variant: 'variant',
            ...blocks.reduce((acc, block) => ({
                ...acc,
                [`${block.value}Title`]: `${block.value}.title`,
            }), {}),
        },
        prepare(selection: any) {
            const {variant} = selection
            const title = variant ? selection[`${variant}Title`] : undefined
            const blockTitle = blocks.find(b => b.value === variant)?.title
            return {
                title: title || `${variant?.toUpperCase() || 'Block'}`,
                subtitle: blockTitle ? `${blockTitle} Block` : undefined,
            }
        },
    },
})
