import { type SchemaTypeDefinition } from 'sanity'
import { post }  from './schemaTypes/post'
import { tag }  from './schemaTypes/tag'

//import blockContent from './schemaTypes/blockContent'
//import category from './schemaTypes/category'
//import author from './schemaTypes/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
