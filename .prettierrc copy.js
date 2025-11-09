// import { defineConfig } from '@king-3/prettier-config'

// const prettierConfig = defineConfig()
// console.log(`🚀 ~ prettierConfig:`, JSON.stringify(prettierConfig, null, 2))

// export default prettierConfig
export default {
  "printWidth": 80,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "overrides": [
    {
      "files": [
        "**/node_modules/**",
        "**/dist/**",
        "**/coverage/**",
        "**/temp/**",
        "**/.vitepress/cache/**",
        "**/.nuxt/**",
        "**/.vercel/**",
        "**/.changeset/**",
        "**/.idea/**",
        "**/.output/**",
        "**/.vite-inspect/**",
        "output/**",
        "**/CHANGELOG*.md",
        "**/*.min.*",
        "**/LICENSE*",
        "**/__snapshots__",
        "**/auto-import?(s).d.ts",
        "**/components.d.ts",
        "**/typed-router.d.ts",
        "**/pnpm-lock.yaml"
      ],
      "options": {
        "requirePragma": true
      }
    },
    {
      "files": [
        "**/jsr.json"
      ],
      "options": {
        "parser": "json-stringify"
      }
    }
  ]
}
