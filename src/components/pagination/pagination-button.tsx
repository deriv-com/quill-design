import { MouseEventHandler, PropsWithChildren } from 'react'
import qtMerge from 'qt-merge'
import styles from './styles.module.scss'

type PaginationButtonProps = {
  className?: string
  disabled?: boolean
  key?: string | number
  onClick: MouseEventHandler<HTMLButtonElement>
}

const PaginationButton = ({
  children,
  className,
  disabled,
  key,
  onClick,
}: PropsWithChildren<PaginationButtonProps>) => (
  <button
    key={key}
    onClick={onClick}
    disabled={disabled}
    className={qtMerge(styles['pagination-btn'], className)}
  >
    {children}
  </button>
)

export default PaginationButton
