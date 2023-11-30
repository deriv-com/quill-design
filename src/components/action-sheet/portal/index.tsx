import { ComponentProps, useContext } from 'react'
import { createPortal } from 'react-dom'
import qtMerge from 'qtMerge'
import HandleBar from '../handle-bar'
import { actionSheetRootCVA } from '../action-sheet.classnames'
import { useSwipeBlock } from 'hooks'
import { ActionSheetContext } from '../root'
import useMounted from 'hooks/useMoutend'

type PortalProps = ComponentProps<'div'>

const Portal = ({ children, ...restProps }: PortalProps) => {
  const mounted = useMounted()
  const { show, handleToggle, className, position, type, expandable } =
    useContext(ActionSheetContext)
  const { height, containerRef, bindHandle } = useSwipeBlock({
    show,
    onClose: handleToggle,
  })

  if (mounted) {
    return (
      <>
        {createPortal(
          <>
            <div
              className="pointer-events-none fixed inset-general-none z-10 flex select-none items-end justify-center overflow-x-hidden transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)] data-[state=close]:invisible"
              role="dialog"
              data-state={show ? 'open' : 'close'}
              {...restProps}
            >
              {type === 'modal' && (
                <div
                  data-testid="dt-actionsheet-overlay"
                  onClick={handleToggle}
                  className="pointer-events-auto fixed inset-50 -z-10 bg-opacity-black-500 transition-opacity duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]"
                ></div>
              )}
              <div
                className={qtMerge(
                  actionSheetRootCVA({ show, position, className }),
                )}
                ref={containerRef}
                style={{ height }}
              >
                {expandable && <HandleBar {...bindHandle()} />}
                {children}
              </div>
            </div>
          </>,
          document.body,
        )}
      </>
    )
  }
  return null
}

Portal.displayName = 'Portal'

export default Portal
