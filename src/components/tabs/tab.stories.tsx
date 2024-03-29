import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedAndroidSmIcon,
  LabelPairedAppleSmIcon,
  LabelPairedCircleInfoSmBoldIcon,
  LabelPairedPlaceholderSmRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import MockTab from './mocks/example'
import { QuillIconComponent } from 'types'

const icons: Record<string, QuillIconComponent | undefined> = {
  placeholder: LabelPairedPlaceholderSmRegularIcon,
  circleinfobold: LabelPairedCircleInfoSmBoldIcon,
  Android: LabelPairedAndroidSmIcon,
  Apple: LabelPairedAppleSmIcon,
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
      description: 'To select the size of icon and font-size',
    },
    icon: {
      options: Object.keys(icons),
      defaultValue: icons['placeholder'],
      mapping: icons,
      description: 'To select the icon required',
      control: {
        type: 'select',
      },
    },
    iconPosition: {
      options: ['left', 'top'],
      control: { type: 'radio' },
      description: 'Icon position is displayed either on the top or left',
    },
  },
} satisfies Meta<typeof MockTab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    icon: LabelPairedCircleInfoSmBoldIcon,
    iconPosition: 'left',
  },
}
