import {CogIcon, DocumentTextIcon, BlockElementIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Indhold')
    .items([

      S.listItem()
        .title('Artikler')
        .schemaType('article')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('article').title('Artikler')),

      S.listItem()
        .title('Sider')
        .schemaType('page')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('page').title('Sider')),

      S.divider(),

      // Show a the taxonomies (with a group label "Taxonomier")
      S.listItem()
        .title('Taxonomier')
        .child(
          S.list()
            .title('Taxonomier')
            .items([
              S.listItem()
                .title('Kategorier')
                .schemaType('tax_category')
                .child(
                  S.documentTypeList('tax_category').title('Kategorier')
                ),
              S.listItem()
                .title('Emner')
                .schemaType('tax_topic')
                .child(S.documentTypeList('tax_topic').title('Emner')),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Blokke')
        .schemaType('blockElement')
        .icon(BlockElementIcon)
        .child(S.documentTypeList('blockElement').title('Blokke')),

      S.divider(),

      S.listItem()
        .title('Indstillinger')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),

    ])