import {
  ComponentPropsWithRef,
  ElementType,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import qtMerge from 'qt-merge'
import {
  LabelPairedChevronLeftRegularIcon,
  LabelPairedChevronRightRegularIcon,
  LabelPairedEllipsisRegularIcon,
} from '@deriv/quill-icons'
import { Button, CaptionText } from '..'
import { usePaginationRange, DOTS } from 'hooks/usePaginationRange'
import PaginationButton from './pagination-button'
import styles from './styles.module.scss'

type PaginationProps<T> = {
  className?: string
  contentPerPage: number
  dataList: Array<T & { id: string | number }>
  renderComponent: ElementType
  variant: 'number' | 'bullet'
} & ComponentPropsWithRef<'div'>

const Pagination = <T,>({
  className,
  contentPerPage,
  dataList = [],
  renderComponent,
  variant,
}: PaginationProps<T>) => {
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const RenderComponent = renderComponent

  const paginationRange = usePaginationRange({
    totalPageCount,
    currentPage,
  })

  useEffect(() => {
    // Ensuring that 0 is not provided for contentPerPage
    const dataToDisplay = contentPerPage > 0 ? contentPerPage : 1
    setTotalPageCount(Math.ceil(dataList.length / dataToDisplay))
  }, [dataList.length, contentPerPage])

  const goToNextPage = () => setCurrentPage((page) => page + 1)

  const gotToPreviousPage = () => setCurrentPage((page) => page - 1)

  const changePage: MouseEventHandler<HTMLButtonElement> = (event) => {
    const pageNumber = Number((event.target as HTMLElement).textContent)
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
        <PaginationButton
          onClick={gotToPreviousPage}
          disabled={currentPage === 1}
          className={styles['pagination-btn--icon']}
        >
          <LabelPairedChevronLeftRegularIcon fill="black" iconSize="sm" />
        </PaginationButton>
        {paginationRange.map((pageNumber, index) => {
          if (variant === 'number') {
            if (pageNumber === DOTS) {
              return (
                <PaginationButton
                  key={`${pageNumber}_${index}`}
                  onClick={changePage}
                  disabled
                  className={styles['pagination-btn--icon']}
                >
                  <LabelPairedEllipsisRegularIcon fill="black" iconSize="sm" />
                </PaginationButton>
              )
            }
            return (
              <PaginationButton
                key={pageNumber}
                onClick={changePage}
                className={
                  currentPage === pageNumber
                    ? 'bg-solid-slate-1400 hover:bg-solid-slate-1400'
                    : ''
                }
              >
                <CaptionText
                  className={qtMerge(
                    'text-ellipsis leading-100 text-typography-default',
                    currentPage === pageNumber ? 'text-solid-slate-50' : '',
                  )}
                >
                  {pageNumber}
                </CaptionText>
              </PaginationButton>
            )
          }
          return (
            <Button
              key={pageNumber}
              onClick={changePage}
              size="sm"
              variant="tertiary"
              colorStyle="black"
            >
              {currentPage === pageNumber ? '•' : '○'}
            </Button>
          )
        })}
        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === totalPageCount}
          className={styles['pagination-btn--icon']}
        >
          <LabelPairedChevronRightRegularIcon fill="black" iconSize="sm" />
        </PaginationButton>
      </section>
    </div>
  )
}

export default Pagination
