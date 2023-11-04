import {
  LabelPairedCircleFillIcon,
  LabelPairedEllipsisRegularIcon,
} from '@deriv/quill-icons'
import { buttonTextVariants, paginationVariants } from './pagination.classnames'
import { DOTS } from 'hooks/usePaginationRange'
import { CaptionText } from '..'
import { PaginationProps } from './pagination.types'

interface PaginationButtonProps<T> extends Pick<PaginationProps<T>, 'variant'> {
  pageNumber: number | string
  currentPage: number
  handleOnClick: (event: string | null) => void
}

/**
 * Component to render type of Pagination button based on variant and page number.
 * @name PaginationButton
 * @param {number} currentPage - Selected page number
 * @param {function} handleOnClick - Function to handle click action on the Pagination button
 * @param {number} pageNumber - Page number
 * @param {string} variant - Variant of Pagination
 */
const PaginationButton = <T,>({
  currentPage,
  handleOnClick,
  pageNumber,
  variant,
}: PaginationButtonProps<T>) => {
  if (variant === 'bullet') {
    return (
      <button
        onClick={() => handleOnClick(String(pageNumber))}
        className={paginationVariants({ variant })}
      >
        <div>
          <LabelPairedCircleFillIcon
            fill="black"
            iconSize="sm"
            height={12}
            width={12}
          />
        </div>
      </button>
    )
  }

  if (pageNumber === DOTS) {
    return (
      <button
        onClick={(e) => handleOnClick((e.target as HTMLElement).textContent)}
        disabled
        className={paginationVariants({ variant })}
      >
        <LabelPairedEllipsisRegularIcon fill="black" iconSize="sm" />
      </button>
    )
  }

  return (
    <button
      key={pageNumber}
      onClick={(e) => handleOnClick((e.target as HTMLElement).textContent)}
      className={paginationVariants({
        variant,
        selected: currentPage === pageNumber,
      })}
    >
      <CaptionText
        className={buttonTextVariants({
          selected: currentPage === pageNumber,
        })}
      >
        {pageNumber}
      </CaptionText>
    </button>
  )
}

export default PaginationButton
