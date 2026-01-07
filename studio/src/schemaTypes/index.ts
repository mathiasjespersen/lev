import {person} from './documents/person'
import {page} from './documents/page'
import {article} from './documents/article'
import {tax_category} from './documents/tax_category'
import {tax_topic} from './documents/tax_topic'
import {blockElement} from './documents/blockElements'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import visual from './objects/visual'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
import {blockVariant} from './objects/blockVariant'

import cta from './blockElements/cta'
import gallery from './blockElements/gallery'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  person,
  article,
  tax_category,
  tax_topic,
  blockElement,
  // Objects
  button,
  visual,
  blockContent,
  blockContentTextOnly,
  blockVariant,
  infoSection,
  callToAction,
  link,
  // Block Elements
  cta,
  gallery,
]
