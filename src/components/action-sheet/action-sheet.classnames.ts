import { cva } from 'class-variance-authority'

export const actionSheetRootCVA = cva(
  'pointer-events-auto mx-auto flex max-h-[70vh] min-w-[320px] max-w-[800px] flex-col overflow-y-auto rounded-t-800 bg-background-dialog px-800 pb-800 transition-all lg:max-h-full lg:max-w-[360px] lg:rounded-50',
  {
    variants: {
      position: {
        left: 'lg:ml-50',
        right: 'lg:mr-50',
      },
      show: {
        true: '',
        false: 'invisible translate-y-full lg:translate-y-50',
      },
    },
    compoundVariants: [
      {
        position: 'left',
        show: true,
        className: 'lg:-translate-x-full',
      },
      {
        position: 'right',
        show: true,
        className: 'lg:translate-x-full',
      },
    ],
    defaultVariants: {
      position: 'right',
      show: false,
    },
  },
)

export const actionSheetFooterCVA = cva('flex gap-400 pt-800 lg:mt-auto', {
  variants: {
    alignment: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    defaultVariants: {
      alignment: 'vertical',
    },
  },
})