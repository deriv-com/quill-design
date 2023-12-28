import { cva } from 'class-variance-authority'
import { InputSize, type InputStatus } from '.'
import { QuillIconComponent } from 'types'
import {
  StandaloneCircleCheckBoldIcon,
  StandaloneTriangleExclamationBoldIcon,
} from '@deriv/quill-icons/Standalone'

export const baseInputWrapperVariants = cva(
  'w-full rounded-400 inline-flex items-center focus-within:border-75 overflow-hidden font-sans relative [&:has(input:enabled)]:cursor-pointer [&:has(input:disabled)]:cursor-not-allowed hover:transition-[border] hover:ease-[cubic-bezier(0.72, 0, 0.24, 1)] hover:duration-160',
  {
    variants: {
      variant: {
        fill: 'border-transparent [&:has(input:disabled)]:bg-opacity-black-75 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:text-opacity-black-300 focus-within:bg-opacity-black-75 focus-within:text-solid-slate-1400 focus-within:border-solid-slate-1400 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:bg-opacity-black-100',
        outline:
          'bg-solid-slate-50 [&:has(input:disabled)]:bg-solid-slate-50 [&:has(input:disabled)]:text-opacity-black-100 [&:has(input:disabled)]:border-opacity-black-100 border-75',
      },
      size: {
        sm: 'px-400 h-1600',
        md: 'px-800 h-2800',
      },
      status: {
        neutral:
          'bg-opacity-black-75 focus-within:bg-opacity-black-75 text-opacity-black-100 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:text-opacity-black-200 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:border-opacity-black-200 focus-within:border-solid-slate-1400 focus-within:text-solid-slate-1400 hover:bg-opacity-black-100',
        error:
          'text-opacity-red-600 border-opacity-red-600 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:text-opacity-red-800 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:border-opacity-red-800 focus-within:text-solid-red-900 focus-within:border-solid-red-900',
        success:
          'text-opacity-green-600 border-opacity-green-600 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:text-opacity-green-800 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:border-opacity-green-800 focus-within:text-solid-green-900 focus-within:border-solid-green-900',
      },
    },
    compoundVariants: [
      {
        variant: ['fill'],
        status: ['success'],
        className:
          'bg-opacity-green-100 border-opacity-green-100 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:bg-opacity-green-200 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:border-opacity-green-200 focus-within:bg-opacity-green-100',
      },
      {
        variant: ['fill'],
        status: ['error'],
        className:
          'bg-opacity-red-100 border-opacity-red-100 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:bg-opacity-red-200 [&:has(input:enabled)]:hover:[&:not(:focus-within)]:border-opacity-red-200 focus-within:bg-opacity-red-100',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'outline',
      status: 'neutral',
    },
  },
)

export const baseInputVariants = cva(
  'transition-opacity h-1200 bg-transparent leading-300 enabled:cursor-pointer peer grow disabled:cursor-not-allowed focus:outline-none focus:text-solid-slate-1400 hover:text-opacity-black-600 placeholder-shown:text-typography-disabled [&:not(placeholder-shown)]:text-opacity-black-600 disabled:text-opacity-black-300 [&:has(~label)]:text-100 [&:has(~label)]:placeholder:text-transparent [&:has(~label)]:focus:placeholder-opacity-black-300 [&::-webkit-search-decoration]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden [&::-ms-clear]:hidden [&::-ms-clear]:w-50 [&::-ms-clear]:h-50 [&::-ms-reveal]:hidden [&::-ms-reveal]:w-50 [&::-ms-reveal]:h-50 focus:[&:has(~label)]:translate-y-1/2 data-[has-value=true]:[&:has(~label)]:translate-y-1/2',
  {
    variants: {
      alignment: {
        left: 'text-left',
        center: '[&:not(:has(~label))]:text-center',
      },
      variant: {
        fill: '',
        outline: '',
      },
      status: {
        neutral: '',
        error: '',
        success: '',
      },
      size: {
        sm: 'h-1100',
        md: 'h-1200',
      },
    },
  },
)
// Make the label animation smoother
export const baseInputLabelVariants = cva(
  'transition-transform duration-160 ease-[cubic-bezier(0.72, 0, 0.24, 1)] pointer-events-none absolute peer-placeholder-shown:text-100 peer-focus:leading-100 peer-focus:text-50 peer-[:not(placeholder-shown)]:leading-100 peer-[:not(placeholder-shown)]:text-50 disabled:text-opacity-black-300 group-[data-has-value=true]:-translate-y-1/2 peer-focus:-translate-y-1/2 peer-data-[has-value=true]:-translate-y-1/2',
  {
    variants: {
      status: {
        neutral: 'text-opacity-black-600',
        error: 'text-solid-red-900',
        success: 'text-solid-green-900',
      },
    },
  },
)
export const baseStatusMessageVariants = cva(
  'py-50 px-800 text-50 leading-100 font-regular',
  {
    variants: {
      status: {
        neutral: 'text-opacity-black-400',
        error: 'text-solid-red-900',
        success: 'text-solid-green-900',
      },
      disabled: {
        true: 'text-opacity-black-400',
        false: '',
      },
    },
  },
)

export const statusIconColours: Record<
  Exclude<InputStatus, undefined>,
  string
> = {
  neutral: 'fill-opacity-black-600',
  error: 'fill-solid-red-900',

  success: 'fill-solid-green-900',
}

export const iconSize: Record<
  Exclude<InputSize, undefined>,
  { width: number; height: number }
> = {
  sm: { width: 24, height: 24 },
  md: { width: 24, height: 24 },
}

export const statusIcons: Record<InputStatus, QuillIconComponent | null> = {
  neutral: null,
  error: StandaloneTriangleExclamationBoldIcon,
  success: StandaloneCircleCheckBoldIcon,
}
