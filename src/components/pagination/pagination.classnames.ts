import { cva } from 'class-variance-authority'

const paginationBaseClass =
  'focus-visible:outline-offset-2 focus-visible:outline-solid-blue-700 disabled:pointer-events-none flex items-center justify-center'

const buttonTextBaseClass = 'text-ellipsis leading-100'

export const paginationVariants = cva(paginationBaseClass, {
  variants: {
    variant: {
      number:
        'h-1600 w-1600 rounded-200 hover:bg-opacity-black-100 active:bg-opacity-black-200',
      bullet: 'rounded-pill',
    },
    theme: {},
    selected: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'number',
      selected: true,
      class: 'bg-solid-slate-1400 hover:bg-solid-slate-1400',
    },
    {
      variant: 'bullet',
      selected: true,
      class: '',
    },
  ],
  defaultVariants: {
    variant: 'number',
  },
})

export const buttonTextVariants = cva(buttonTextBaseClass, {
  variants: {
    selected: {
      true: 'text-solid-slate-50',
      false: 'text-typography-default',
    },
    defaultVariants: {
      selected: false,
    },
  },
})

export const bulletIconFillVariants = cva('', {
  variants: {
    selected: {
      true: 'fill-solid-slate-1400',
      false: 'fill-opacity-black-100 active:fill-opacity-black-200',
    },
    defaultVariants: {
      selected: false,
    },
  },
})

export const navigationIconFillVariants = cva('', {
  variants: {
    disabled: {
      true: 'fill-opacity-black-300',
      false: 'fill-solid-slate-1400',
    },
    defaultVariants: {
      disabled: false,
    },
  },
})
