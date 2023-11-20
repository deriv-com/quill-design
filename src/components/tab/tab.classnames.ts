import { cva } from 'class-variance-authority'
import { TabSize } from './types'

export const tabTriggerCVA = cva(
  'group inline-flex items-center text-opacity-black-600 border-b-100 border-b-transparent hover:[&:not(:disabled)]:border-b-opacity-black-200 active:[&:not(:disabled)]:border-b-opacity-black-200:border-b-opacity-black-300 aria-selected:border-b-solid-slate-1400 aria-selected:text-solid-slate-1400 disabled:text-opacity-black-300',
  {
    variants: {
      size: {
        sm: 'text-75 px-200 leading-[1.57]',
        md: 'text-100 px-800 leading-[1.5]',
      },
      iconPosition: {
        top: 'flex-col',
        left: '',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        iconPosition: ['left', 'top'],
        className: 'gap-200',
      },
      {
        size: 'md',
        iconPosition: ['left', 'top'],
        className: 'gap-300',
      },
      {
        size: 'sm',
        iconPosition: 'left',
        className: 'py-200',
      },
      {
        size: 'md',
        iconPosition: 'left',
        className: 'pb-400',
      },
      {
        size: ['sm', 'md'],
        iconPosition: 'top',
        className: 'pb-300',
      },
    ],
  },
)

export const tabIconCVA = cva(
  'group-disabled:fill-opacity-black-300 group-aria-selected:fill-solid-slate-1400',
)

export const tabIconSizes: Record<TabSize, { width: number; height: number }> =
  {
    sm: {
      width: 24,
      height: 24,
    },
    md: {
      width: 32,
      height: 32,
    },
  }
