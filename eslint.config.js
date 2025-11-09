import { defineConfig } from '@king-3/eslint-config'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default defineConfig({
  typescript: true,
  vue: true,

  prettier: true
})
