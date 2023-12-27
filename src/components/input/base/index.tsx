import { QuillSvgProps } from '@deriv/quill-icons'
import {
  ForwardRefExoticComponent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import {
  baseInputLabelVariants,
  baseInputVariants,
  baseInputWrapperVariants,
  baseStatusMessageVariants,
  iconSize,
  statusIconColours,
  statusIcons,
} from './base.classnames'
import { VariantProps } from 'class-variance-authority'
import qtMerge, { qtJoin } from 'qtMerge'
import { ExcludeNullAndUndefined } from 'types'

type baseInputWrapperVariantsExcludingNullAndUndefined =
  ExcludeNullAndUndefined<
    VariantProps<typeof baseInputWrapperVariants>,
    'size' | 'status' | 'variant'
  >

type baseInputVariantsExcludingNullAndUndefined = ExcludeNullAndUndefined<
  VariantProps<typeof baseInputVariants>,
  'alignment'
>

export type InputSize =
  baseInputWrapperVariantsExcludingNullAndUndefined['size']

export type InputStatus =
  baseInputWrapperVariantsExcludingNullAndUndefined['status']

export type InputVariant =
  baseInputWrapperVariantsExcludingNullAndUndefined['variant']

export type InputTextAlignment =
  baseInputVariantsExcludingNullAndUndefined['alignment']

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute
  icon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  statusIcon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  inputSize?: InputSize
  status?: InputStatus
  disabled?: boolean
  variant?: InputVariant
  leftStatusMessage?: string
  rightStatusMessage?: string
  textAlignment?: InputTextAlignment
  label?: string
  value?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      inputSize = 'md',
      className,
      status = 'neutral',
      disabled = false,
      variant = 'outline',
      icon: Icon,
      leftStatusMessage,
      rightStatusMessage,
      textAlignment = 'left',
      label,
      statusIcon: StatusIcon = statusIcons[status],
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [hasValue, setHasValue] = useState(false)
    return (
      <div className="flex w-full flex-col">
        <div
          className={qtMerge(
            baseInputWrapperVariants({
              size: inputSize,
              status: status,
              className,
              variant,
            }),
          )}
        >
          {Icon && (
            <div>
              <Icon {...iconSize[inputSize]} />
            </div>
          )}
          <div className="relative mx-400 flex h-2100 items-center">
            <input
              {...rest}
              type={type}
              className={qtJoin(
                baseInputVariants({
                  variant,
                  size: inputSize,
                  status,
                  alignment: textAlignment,
                }),
              )}
              data-has-value={hasValue}
              disabled={disabled}
              onChange={(e) => {
                setHasValue(!!e.target.value)
                onChange?.(e)
              }}
              ref={ref}
            />

            {label && inputSize === 'md' && (
              <label
                className={qtJoin(
                  baseInputLabelVariants({
                    status,
                  }),
                )}
              >
                {label}
              </label>
            )}
          </div>
          {StatusIcon && !disabled && (
            <div>
              <StatusIcon
                {...iconSize[inputSize]}
                className={qtJoin(statusIconColours[status])}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between pt-200">
          {leftStatusMessage && (
            <p
              key={leftStatusMessage}
              className={qtJoin(
                baseStatusMessageVariants({
                  status,
                  disabled,
                  className: 'animate-drop-in',
                }),
              )}
            >
              {leftStatusMessage}
            </p>
          )}
          {rightStatusMessage && (
            <p
              className={qtJoin(
                baseStatusMessageVariants({ status, className: 'self-end' }),
              )}
            >
              {rightStatusMessage}
            </p>
          )}
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
