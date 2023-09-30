import { qtMerge, qtJoin } from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

export type TextSize = 'xl' | 'lg' | 'md' | 'sm'
export type TextVariant = 'regular' | 'bold'
export type TextType = 'regular' | 'underline' | 'italic'

export type TextProps = {
  size?: TextSize
  variant?: TextVariant
  type?: TextType
} & ComponentPropsWithRef<'p'>

export const Text = forwardRef(
  (
    {
      className,
      size = 'md',
      variant = 'regular',
      type = 'regular',
      ...rest
    }: TextProps,
    ref: Ref<HTMLParagraphElement>,
  ) => {
    const componentClassnames = qtJoin(
      'font-sans',
      'text-solid-coral-500',
      size === 'xl' && 'text-body-xl',
      size === 'lg' && 'text-body-lg',
      size === 'md' && 'text-body-md',
      size === 'sm' && 'text-body-xl',
      size === 'xl' && 'space-y-paragraphSpacing-body-xl',
      size === 'lg' && 'space-y-paragraphSpacing-body-lg',
      size === 'md' && 'space-y-paragraphSpacing-body-md',
      size === 'sm' && 'space-y-paragraphSpacing-body-sm',
      size === 'xl' && 'space-y-paragraphSpacing-body-xl',
      size === 'xl' && 'leading-body-xl',
      size === 'lg' && 'leading-body-lg',
      size === 'md' && 'leading-body-md',
      size === 'sm' && 'leading-body-sm',
      variant === 'regular' && 'font-regular',
      variant === 'bold' && 'font-bold',
      type === 'italic' && 'italic',
      type === 'underline' && 'underline',
    )
    return (
      <p
        ref={ref}
        className={qtMerge(componentClassnames, className)}
        {...rest}
      />
    )
  },
)

Text.displayName = 'Text'

export default Text
