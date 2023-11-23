import { cva } from 'class-variance-authority'
import { TabSize } from './types'

export const tabVariants = cva(
  'group inline-flex items-center text-typography-default border-b-100 aria-selected:fill-typography-prominant border-b-transparent hover:[&:not(:disabled)]:border-b-opacity-black-300 active:[&:not(:disabled)]:border-b-opacity-black-300 aria-selected:border-b-solid-slate-1400 aria-selected:border-b-solid-slate-1400 aria-selected:text-solid-slate-1400 disabled:text-typography-disabled disabled:',
  {
    variants: {
      size: {
        sm: 'text-75 px-400 py-200',
        md: 'text-100 px-800 py-600',
      },
      iconPosition: {
        left: 'flex-row',
        top: 'flex-col',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        iconPosition: 'left',
        className: 'gap-75',
      },
      {
        size: 'sm',
        iconPosition: 'top',
        className: 'gap-75',
      },
      {
        size: 'md',
        iconPosition: 'left',
        className: 'gap-200',
      },
      {
        size: 'md',
        iconPosition: 'top',
        className: 'gap-200',
      },
    ],
  },
)
export const tabIconFillCVA = cva(
  'group-disabled:fill-opacity-black-300 group-aria-selected:fill-solid-slate-1400 group-active:fill-opacity-black-600',
  {
    variants: {
      size: {
        sm: '',
        md: '',
      },
      iconPosition: {
        left: '',
        top: '',
      },
    },
  },
)

export const IconSize: Record<TabSize, { width: number; height: number }> = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
}
