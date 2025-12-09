import { type SchemaTypeDefinition } from 'sanity'
import { categoryTypes } from './categoryTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryTypes],
}
