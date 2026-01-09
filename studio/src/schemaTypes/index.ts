import {post} from './documents/post'
import {person} from './documents/person'
import {page} from './documents/page'
import {article} from './documents/article'
import {tax_category} from './documents/tax_category'
import {tax_topic} from './documents/tax_topic'
import {reusableBlocks} from './documents/reusableBlocks'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import visual from './objects/visual'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
import {blockContentWithBlocks} from './objects/blockContentWithBlocks'
import {blockVariant} from './objects/blockVariant'
import {blockVariantWithReusableBlock} from './objects/blockVariantWithReusableBlock'

import reusableBlock from './blocks/reusableBlock'
import cta from './blocks/cta'
import gallery from './blocks/gallery'
import card from './blocks/card'
import { ca } from 'date-fns/locale'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  post,
  page,
  person,
  article,
  tax_category,
  tax_topic,
  reusableBlocks,
  // Objects
  button,
  visual,
  blockContent,
  blockContentTextOnly,
  blockContentWithBlocks,
  blockVariant,
  blockVariantWithReusableBlock,
  infoSection,
  callToAction,
  link,
  // Block Elements
  reusableBlock,
  cta,
  gallery,
  card,
]
