import { useEffect, useState } from 'react'
import {
  LabelPairedChevronLeftRegularIcon,
  LabelPairedChevronRightRegularIcon,
} from '@deriv/quill-icons'
import { usePaginationRange } from 'hooks/usePaginationRange'
import PaginationButton from './pagination-button'
import { paginationVariants } from './pagination.classnames'
import { PaginationProps } from './pagination.types'

/**
 * Component that can divide large lists of data into smaller more manageable pages.
 * @name Pagination
 * @param {string} className- Styles to be applied to Pagination body
 * @param {number} contentPerPage- Number of items to be displayed per page
 * @param {Array} dataList- List of data to be displayed
 * @param {React.Component} renderComponent- Component to be rendered
 * @param {string} variant- Variant of Pagination.
 *
 * @example
 * <Pagination
 * className="pagination__container"
 * contentPerPage={10}
 * dataList={dataList}
 * renderComponent={<DisplayContent />}
 * variant="number"
 * />
 */
const Pagination = <T,>({
  className,
  contentPerPage,
  dataList = [],
  renderComponent,
  variant = 'number',
}: PaginationProps<T>) => {
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const RenderComponent = renderComponent

  const paginationRange = usePaginationRange({
    totalPageCount,
    currentPage,
    variant,
  })

  useEffect(() => {
    // Ensuring that 0 is not provided for contentPerPage
    const dataToDisplay = contentPerPage > 0 ? contentPerPage : 1
    setTotalPageCount(Math.ceil(dataList.length / dataToDisplay))
  }, [dataList.length, contentPerPage])

  const goToNextPage = () => setCurrentPage((page) => page + 1)

  const gotToPreviousPage = () => setCurrentPage((page) => page - 1)

  const changePage = (event: string | null) => {
    const pageNumber = Number(event)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * contentPerPage - contentPerPage
    const endIndex = startIndex + contentPerPage
    return dataList.slice(startIndex, endIndex)
  }

  return (
    <div className="row-auto grid">
      <section className={className}>
        {getPaginatedData().map((dataItem) => (
          <RenderComponent key={dataItem.id} data={dataItem} />
        ))}
      </section>
      <section className="flex items-center justify-center gap-400">
        <button
          onClick={gotToPreviousPage}
          disabled={currentPage === 1}
          className={paginationVariants({ variant })}
        >
          <LabelPairedChevronLeftRegularIcon fill="black" iconSize="sm" />
        </button>
        {paginationRange.map((pageNumber, index) => (
          <PaginationButton
            key={`${pageNumber}_${index}`}
            pageNumber={pageNumber}
            variant={variant}
            currentPage={currentPage}
            handleOnClick={changePage}
          />
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPageCount}
          className={paginationVariants({ variant })}
        >
          <LabelPairedChevronRightRegularIcon fill="black" iconSize="sm" />
        </button>
      </section>
    </div>
  )
}

export default Pagination
