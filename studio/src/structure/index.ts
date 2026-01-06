import {CogIcon, DocumentTextIcon} from '@sanity/icons'
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

      S.listItem()
        .title('Indstillinger')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),

    ])