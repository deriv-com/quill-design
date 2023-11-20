import { ComponentProps } from 'react'
import { VariantProps } from 'class-variance-authority'
import { ExcludeAllNull, QuillIconComponent } from 'types'
import { tabTriggerCVA } from './tab.classnames'

export type TabProps = ComponentProps<'div'> &
  ExcludeAllNull<VariantProps<typeof tabTriggerCVA>> & {
    id: string
  }

export type TabTriggerProps = ComponentProps<'button'> &
  ExcludeAllNull<VariantProps<typeof tabTriggerCVA>> & {
    icon?: QuillIconComponent
  }

export type TabSize = NonNullable<TabTriggerProps['size']>
