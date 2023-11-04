import { type ElementType } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { paginationVariants } from './pagination.classnames'
import { ExcludeNull } from 'types'

export type PaginationVariantProps = VariantProps<typeof paginationVariants>

export interface PaginationProps<T>
  extends ExcludeNull<
    Required<Pick<PaginationVariantProps, 'variant'>>,
    'variant'
  > {
  className?: string
  contentPerPage: number
  dataList: Array<T & { id: string | number }>
  renderComponent: ElementType
}
