import {defineType} from 'sanity'

// const blocks = [
//     {
//         title: 'CTA',
//         value: 'cta',
//     },
//     {
//         title: 'Galleri',
//         value: 'gallery',
//     },
// ]

const blocks = [
    {
        title: 'CTA',
        type: 'cta',
    },
    {
        title: 'Galleri',
        type: 'gallery',
    },
    {
        title: 'Kort',
        type: 'card',
    }
]

export const blockVariant = defineType({
    name: 'blockVariant',
    title: 'Blok',
    type: 'object',
    fields: [
        {
            name: 'variant',
            title: 'Valgte blok',
            type: 'array',
            of: blocks,
            // options: {
            //     list: blocks,
            //     layout: 'dropdown',
            // },
            validation: (Rule) => Rule.length(1).required(),
            options: {
                insertMenu: {
                views: [
                        {
                        name: 'grid',
                        previewImageUrl: (schemaTypeName) =>
                            `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
                        },
                    ],
                },
            },
        },
        // ...blocks.map((block) => ({
        //     name: block.value,
        //     title: block.title,
        //     type: block.value,
        //     hidden: ({parent}: {parent?: {variant?: string}}) => parent?.variant !== block.value,
        // })),
        
    ],
    preview: {
        select: {
            variant: 'variant',
            ...blocks.reduce((acc, block) => ({
                ...acc,
                [`${block.type}Title`]: `${block.type}.title`,
            }), {}),
        },
        prepare(selection: any) {
            const {variant} = selection
            const title = variant ? selection[`${variant}Title`] : undefined
            const blockTitle = blocks.find(b => b.type === variant)?.title
            return {
                title: title || `${variant?.toUpperCase() || 'Block'}`,
                subtitle: blockTitle ? `${blockTitle} Block` : undefined,
            }
        },
    },
})
