import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedAndroidIcon,
  LabelPairedAppleIcon,
  LabelPairedCircleInfoBoldIcon,
  LabelPairedPlaceholderRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import MockTab from './mocks/example'
import { Tab } from '.'
import { QuillIconComponent } from 'types'

const icons: Record<string, QuillIconComponent | undefined> = {
  placeholder: LabelPairedPlaceholderRegularIcon,
  'Circle info bold': LabelPairedCircleInfoBoldIcon,
  Android: LabelPairedAndroidIcon,
  Apple: LabelPairedAppleIcon,
}

const meta = {
  title: 'Components/Tabs',
  component: MockTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    icon: {
      options: Object.keys(icons),
      defaultValue: icons['placeholder'],
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    iconPosition: {
      options: ['left', 'top'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    icon: LabelPairedCircleInfoBoldIcon,
    iconPosition: 'left',
  },
}
