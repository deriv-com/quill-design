import {
  StandaloneChevronDownRegularIcon,
  StandaloneCircleXmarkRegularIcon,
} from '@deriv/quill-icons'
import { forwardRef } from 'react'
import {
  ChipIconSizes,
  chipBaseClassnames,
  ChipStandaloneIconSizes,
  chipBaseVariant,
  chipSelectionClassnames,
} from '../chip.classnames'
import type { SelectableChipProps } from '../types'
import qtMerge from 'qtMerge'

export const SelectableChip = forwardRef<
  HTMLButtonElement,
  SelectableChipProps
>(
  (
    {
      className,
      children,
      dismissible = false,
      icon: Icon,
      isDropdownOpen,
      dropdown = false,
      labelTag,
      onChipSelect,
      onDismiss,
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (dismissible || dropdown) return
      const target = event.currentTarget
      const isSelected = target.getAttribute('data-state') === 'selected'
      const selected_state = isSelected ? '' : 'selected'
      target.setAttribute('data-state', selected_state)
      onChipSelect?.(event, !isSelected)
    }

    const handleDismiss = (
      event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    ) => {
      onDismiss?.(event)
    }

    return (
      <button
        className={chipBaseVariant({
          dismissible,
          size,
          className: qtMerge(
            chipBaseClassnames,
            chipSelectionClassnames,
            className,
          ),
        })}
        data-state=""
        ref={ref}
        onClick={handleClick}
        {...rest}
      >
        {Icon && <Icon {...ChipIconSizes[size]} />}
        {children}
        {labelTag && <span className="font-bold">{labelTag}</span>}
        {dismissible && (
          <StandaloneCircleXmarkRegularIcon
            {...ChipStandaloneIconSizes[size]}
            onClick={handleDismiss}
            data-testid="dt-chip-dismissable-btn"
            className="cursor-pointer"
          />
        )}
        {dropdown && (
          <>
            <StandaloneChevronDownRegularIcon
              data-state={isDropdownOpen ? 'open' : 'close'}
              id="selectable_chip_chevron"
              className="transition-transform duration-300 data-[state=open]:rotate-180"
              {...ChipStandaloneIconSizes[size]}
            />
          </>
        )}
      </button>
    )
  },
)

SelectableChip.displayName = 'SelectableChip'

export default SelectableChip