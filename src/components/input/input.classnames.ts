import { cva } from 'class-variance-authority'

export const inputWrapperVariants = cva(
  'w-[360px] rounded-400 inline-flex items-center justify-center bg-solid-slate-50 px-400 enabled:cursor-pointer',
  {
    variants: {
      variant: {
        fill: '',
        outline: '',
      },
      size: {
        sm: 'px-800 py-50 text-75 text-regular text-sans h-1600',
        md: 'px-800 py-50 text-100 text-regular text-sans h-2800',
      },
      status: {
        neutral: 'border-50 hover:border-black-75',
        error: 'border-status-danger',
        success: 'border-status-success',
      },
      disabled: {
        true: 'bg-solid-slate-100 text-slate-1400 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: ['outline', 'fill'],
        status: ['neutral', 'error', 'success'],
        disabled: [false],
        className: 'focus-within:border-75',
      },
      {
        variant: ['outline'],
        status: ['neutral'],
        disabled: [false],
        className:
          'focus-within:border-solid-slate-1400 hover:border-75 hover:border-opacity-black-200',
      },
      {
        variant: ['outline'],
        status: ['error'],
        disabled: [false],
        className: ' focus-within:border-solid-red-900',
      },

      {
        variant: ['outline'],
        status: ['success'],
        disabled: [false],
        className: 'focus-within:border-solid-green-900',
      },
      {
        variant: ['fill'],
        status: ['success'],
        disabled: [false],
        className: 'bg-opacity-green-200',
      },
      {
        variant: ['fill'],
        status: ['error'],
        disabled: [false],
        className: 'bg-opacity-red-100',
      },
    ],
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      status: 'neutral',
    },
  },
)

export const inputVariants = cva(
  'focus:outline-none grow text-slate-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        fill: '',
        outline: '',
      },
      status: {
        neutral: '',
        error: '',
        success: '',
      },
      alignment: {
        left: 'text-left',
        center: 'text-center',
      },
      disabled: {
        true: 'bg-solid-slate-100 text-slate-1400 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: ['outline'],
        status: ['neutral'],
        className: '',
      },
      {
        variant: ['fill'],
        status: ['success'],
        disabled: [false],
        className: 'bg-opacity-green-200',
      },
      {
        variant: ['fill'],
        status: ['error'],
        disabled: [false],
        className: 'bg-opacity-red-100',
      },
    ],
  },
)
