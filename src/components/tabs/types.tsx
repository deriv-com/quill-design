import { ExcludeAllNull, QuillIconComponent } from 'types'
import { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { tabVariants } from './tab.classnames'

export type TabTriggerProps = ComponentProps<'button'> &
  ExcludeAllNull<VariantProps<typeof tabVariants>> & {
    icon?: QuillIconComponent
  }

export type TabSize = NonNullable<TabTriggerProps['size']>
