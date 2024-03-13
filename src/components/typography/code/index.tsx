import { VariantProps, cva } from 'class-variance-authority'
import qtMerge from 'qtMerge'
import { forwardRef } from 'react'
import { BodyTextProps, bodyTextCVA } from '../text/text.classes'
import { HTMLElementWithoutColor } from 'types'

const codeTextSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'text-code-sm space-y-paragraphSpacing-code-sm leading-code-sm',
      md: 'text-code-md space-y-paragraphSpacing-code-md leading-code-md',
      lg: 'text-code-lg space-y-paragraphSpacing-code-lg leading-code-lg',
      xl: 'text-code-xl space-y-paragraphSpacing-code-xl leading-code-xl',
    },
  },
})

export type CodeTextSizeProps = VariantProps<typeof codeTextSizeCVA>

export interface CodeTextProps
  extends HTMLElementWithoutColor,
    BodyTextProps,
    CodeTextSizeProps {}

export const CodeText = forwardRef<HTMLParagraphElement, CodeTextProps>(
  (
    {
      size = 'md',
      bold,
      italic,
      className,
      underline,
      color = 'default',
      ...rest
    },
    ref,
  ) => {
    return (
      <code
        ref={ref}
        className={qtMerge(
          'font-mono',
          codeTextSizeCVA({ size }),
          bodyTextCVA({
            color,
            bold,
            italic,
            underline,
          }),
          className,
        )}
        {...rest}
      />
    )
  },
)

CodeText.displayName = 'CodeText'

export default CodeText
