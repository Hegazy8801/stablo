import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'stablo',

  projectId: 'wgj3n5vi',
  dataset: 'stablo',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
