import {CogIcon, DocumentTextIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'assist.instruction.context']

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