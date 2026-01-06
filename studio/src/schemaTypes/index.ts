import {person} from './documents/person'
import {page} from './documents/page'
import {article} from './documents/article'
import {tax_category} from './documents/tax_category'
import {tax_topic} from './documents/tax_topic'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import visual from './objects/visual'
import {blockContentTextOnly} from './objects/blockContentTextOnly'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  person,
  article,
  tax_category,
  tax_topic,
  // Objects
  button,
  visual,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
]
