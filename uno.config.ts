import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

/* Style Border */
type BorderType = 'b' | 'bt' | 'bb' | 'bl' | 'br'
type BorderProperty =
  | 'border'
  | 'border-top'
  | 'border-bottom'
  | 'border-left'
  | 'border-right'

const colorPattern = `(?:\\$[a-zA-Z-_][\\w-]*|rgba?\\([\\d\\s.,%]+\\)|hsla?\\([\\d\\s.,%]+\\)|#[0-9a-fA-F]{3,8}|[a-zA-Z]+)`
const borderRegex = new RegExp(`^(b|bt|bb|bl|br)-(\\d+)-${colorPattern}$`)
const directionMap: Record<BorderType, BorderProperty> = {
  b: 'border',
  bb: 'border-bottom',
  bl: 'border-left',
  br: 'border-right',
  bt: 'border-top'
}

const parseColor = (colorStr: string): string => {
  return colorStr.startsWith('$') ? `var(--${colorStr.slice(1)})` : colorStr
}
const generateBorderStyle = (
  match: RegExpMatchArray,
  borderType: BorderType
): Record<BorderProperty, string> => {
  const size = match[2] // 边框宽度
  const color = parseColor(match[3])
  const borderProp = directionMap[borderType]

  return {
    [borderProp]: `${size}px solid ${color}`
  } as Record<BorderProperty, string>
}

/* Config */
export default defineConfig({
  // 预设
  presets: [
    // Tailwind4 CSS 紧凑预设
    presetWind4(),
    // class拆分属性预设
    presetAttributify(),
    // 排版预设
    presetTypography()
  ],
  // 快捷方式
  shortcuts: [
    ['absolute-center', 'absolute top-50% left-50% transform-translate--50%'],
    ['flex-between', 'flex justify-between items-center'],
    ['flex-center', 'flex items-center justify-center'],
    ['flex-col-center', 'flex flex-col items-center justify-center'],
    ['flex-start', 'flex justify-start items-center'],
    ['flex-end', 'flex justify-end items-center'],
    ['text-overflow', 'truncate']
  ],
  // 规则
  rules: [
    [borderRegex, (match) => generateBorderStyle(match, match[1] as BorderType)]
  ],
  // 转换器
  transformers: [
    /*
      @apply @screen theme()转换器
        @apply: flex;
        @screen xs { .grid { color: black } }
        .test{ background-color: theme('colors.blue.500'); }
    */
    transformerDirectives(),
    /*
      wind CSS的变体组功能
        sm:(mx-auto max-w-md w-full) text-(bold blue)
    */
    transformerVariantGroup()
  ]
})
