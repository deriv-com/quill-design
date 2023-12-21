import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'
import {
  LabelPairedCircleInfoMdBoldIcon,
  LabelPairedAndroidMdIcon,
  LabelPairedAppleMdIcon,
} from '@deriv/quill-icons/LabelPaired'

const icons: Record<string, object | null> = {
  sample_1: LabelPairedCircleInfoMdBoldIcon,
  sample_2: LabelPairedAndroidMdIcon,
  sample_3: LabelPairedAppleMdIcon,
  none: null,
}

const meta = {
  title: 'Chips/Dismissible Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['dismissible'],
    },
  },
  args: {
    children: 'Dismissible Chip',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'children',
      control: 'text',
    },
    icon: {
      description: 'Icon to display on the left side of the chip',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    onDismiss: {
      description: 'Handler to be called when the chip is dismissed',
      control: false,
      action: 'onDismiss',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const DismissibleChip: Story = {}
