import { qtMerge } from 'qtMerge'
import { forwardRef } from 'react'
import {
  BodyTextProps,
  BodyTextSizeProps,
  bodyTextCVA,
  bodyTextParagraphSpacingCVA,
  bodyTextSizeCVA,
} from './text.classes'
import { HTMLElementWithoutColor } from 'types'

export interface BodyTypographyProps
  extends HTMLElementWithoutColor<HTMLParagraphElement>,
    BodyTextProps,
    BodyTextSizeProps {}

export const Text = forwardRef<HTMLParagraphElement, BodyTypographyProps>(
  (
    {
      size = 'md',
      className,
      bold = false,
      italic = false,
      underline = false,
      color = 'default',
      ...rest
    },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        className={qtMerge(
          bodyTextCVA({
            color,
            bold,
            italic,
            underline,
          }),
          bodyTextSizeCVA({ size }),
          bodyTextParagraphSpacingCVA({ size }),
          className,
        )}
        {...rest}
      />
    )
  },
)

Text.displayName = 'Text'

export default Text
