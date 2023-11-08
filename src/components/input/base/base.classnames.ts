import { cva } from 'class-variance-authority'
import { InputSize, type InputStatus } from '.'

export const baseInputWrapperVariants = cva(
  'w-[360px] rounded-400 inline-flex items-center py-50 border-75 overflow-hidden font-sans relative cursor-pointer  data-[disabled]:cursor-not-allowed',
  {
    variants: {
      variant: {
        fill: 'data-[diasbled]:bg-opacity-black-75 data-[hovered]:bg-opacity-black-100 data-[hovered]:text-opacity-black-300 data-[focused]:bg-opacity-black-75 data-[focused]:text-solid-slate-1400 data-[focused]:border-solid-slate-1400',
        outline:
          'bg-solid-slate-50 data-[disabled]:bg-solid-slate-50 data-[disabled]:text-opacity-black-100 data-[disabled]:border-opacity-black-100',
      },
      size: {
        sm: 'px-400 h-1600',
        md: 'px-800 h-2800',
      },
      status: {
        neutral:
          ' text-opacity-black-100 data-[hovered]:text-opacity-black-200 data-[hovered]:border-opacity-black-200 data-[focused]:border-solid-slate-1400 data-[focused]:text-solid-slate-1400',
        error:
          'text-opacity-red-600 border-opacity-red-600 data-[hovered]:text-opacity-red-800 data-[hovered]:border-opacity-red-800 data-[focused]:text-solid-red-900 data-[focused]:border-solid-red-900',
        success:
          'text-opacity-green-600 border-opacity-green-600 data-[hovered]:text-opacity-green-800 data-[hovered]:border-opacity-green-800 data-[focused]:text-solid-green-900 data-[focused]:border-solid-green-900',
      },
    },
    compoundVariants: [
      {
        variant: ['fill'],
        status: ['success'],
        className:
          'bg-opacity-green-100 border-opacity-green-100 data-[hovered]:bg-opacity-green-200 data-[hovered]:border-opacity-green-200',
      },
      {
        variant: ['fill'],
        status: ['error'],
        className:
          'bg-opacity-red-100 border-opacity-red-100 data-[hovered]:bg-opacity-red-200 data-[hovered]:border-opacity-red-200',
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
  'h-1200 leading-300 cursor-pointer peer grow disabled:cursor-not-allowed focus:outline-none focus:text-solid-slate-1400 hover:text-opacity-black-600 placeholder-shown:text-opacity-black-300 [&:not(placeholder-shown)]:text-opacity-black-600 disabled:text-opacity-black-300',
  {
    variants: {
      alignment: {
        left: 'text-left',
        center: 'text-center',
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

export const baseInputLabelVariants = cva(
  'transition-all duration-[160ms] pointer-events-none absolute peer-focus:-translate-y-full peer-focus:leading-100 peer-focus:text-50 peer-focus:mt-200 ',
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
  neutral: '',
  error: 'red',
  success: 'green',
}

export const iconSize: Record<
  Exclude<InputSize, undefined>,
  { width: number; height: number }
> = {
  sm: { width: 24, height: 24 },
  md: { width: 24, height: 24 },
}