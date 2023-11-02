import qtMerge from 'qtMerge'
import { HTMLAttributes, HTMLInputTypeAttribute, forwardRef } from 'react'
import { inputWrapperVariants, inputVariants } from './input.classnames'
import { QuillSvgProps } from '@deriv/quill-icons'
import { VariantProps } from 'class-variance-authority'

export type InputSize = Exclude<
  VariantProps<typeof inputWrapperVariants>['size'],
  null
>
export type InputVariant = Exclude<
  VariantProps<typeof inputWrapperVariants>['variant'],
  null
>
export type InputStatus = Exclude<
  VariantProps<typeof inputWrapperVariants>['status'],
  null
>
export type InputAlignment = 'left' | 'center'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute
  value?: string
  inputSize?: InputSize
  variant?: InputVariant
  status?: InputStatus
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  statusIcon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  alignment?: InputAlignment
  disabled?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder = 'Placeholder',
      className = '',
      inputSize = 'md',
      status = 'neutral',
      variant = 'outline',
      icon: Icon,
      statusIcon: StatusIcon,
      alignment = 'left',
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={qtMerge(
          inputWrapperVariants({
            variant,
            status,
            size: inputSize,
            disabled,
            className,
          }),
        )}
      >
        {Icon && (
          <div>
            <Icon iconSize={inputSize} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={qtMerge(
            inputVariants({
              status,
              variant,
              alignment,
              disabled,
            }),
          )}
          {...rest}
          ref={ref}
        />
        {StatusIcon && (
          <div>
            <StatusIcon iconSize={inputSize} />
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
