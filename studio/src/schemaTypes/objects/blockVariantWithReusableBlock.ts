import {defineType} from 'sanity'

const blocks = [
    {
        title: 'Genanvendelig blok',
        type: 'reusableBlock',
    },
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

export const blockVariantWithReusableBlock = defineType({
    name: 'blockVariantWithReusableBlock',
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
                [`${block.type}Title`]: `variant.0.${block.type}.title`,
            }), {}),
        },
        prepare(selection: any) {
            const {variant} = selection
            const firstItem = variant?.[0]
            console.log('firstItem', firstItem)
            const blockType = firstItem?._type
            const title = firstItem?.title || 'Untitled'
            const blockTitle = blocks.find(b => b.type === blockType)?.title
            return {
                title,
                subtitle: blockTitle,
            }
        },
    },
})
