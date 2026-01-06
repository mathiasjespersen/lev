import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {article} from './documents/article'
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
  post,
  person,
  article,
  // Objects
  button,
  visual,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
]
