import { MouseEvent, useContext, useEffect, useRef } from 'react'
import { TabContext } from '../container'
import qtMerge, { qtJoin } from 'qtMerge'
import { tabIconSizes, tabTriggerCVA, tabIconCVA } from '../tab.classnames'
import { TabTriggerProps } from '../types'

const TabTrigger = ({
  children,
  className,
  icon: Icon,
  ...rest
}: TabTriggerProps) => {
  const { handleTabChange, id, activeTab, size, iconPosition } =
    useContext(TabContext)
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (ref.current && ref.current?.parentElement) {
      const items = Array.from(ref.current.parentElement?.children)
      const idx = items.indexOf(ref.current)

      // Set aria-selected
      if (activeTab === idx) {
        ref.current.setAttribute('aria-selected', 'true')
      } else {
        ref.current.setAttribute('aria-selected', 'false')
      }

      // Set unique ID
      items.forEach((item, i) => {
        item.id = `${id}-trigger-${i}`
      })
    }
  }, [activeTab, id])

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.parentElement) {
      const idx = Array.from(e.currentTarget.parentElement.children).indexOf(
        e.currentTarget,
      )
      handleTabChange?.(idx)
    }
  }

  return (
    <button
      type="button"
      ref={ref}
      onClick={clickHandler}
      className={qtMerge(tabTriggerCVA({ size, iconPosition }), className)}
      role="tab"
      aria-controls={`${id}-panel`}
      {...rest}
    >
      {Icon && size && (
        <Icon
          {...tabIconSizes[size]}
          className={qtJoin(tabIconCVA())}
          data-testid="dt-tab-trigger-icon"
        />
      )}

      {children}
    </button>
  )
}

TabTrigger.displayName = 'TabTrigger'

export default TabTrigger
