import type { Meta, StoryObj } from '@storybook/react'
import { Information } from '.'
const meta = {
  title: 'Section-Message/Information',
  component: Information,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Information>

export default meta
type Story = StoryObj<typeof meta>

export const InformationMessage: Story = {
  args: {
    size: 'sm',
    colorStyle: 'information',
    title: 'Title',
    description: 'Message',
    link1: {
      children: 'link1',
      href: '/',
    },
    link2: {
      children: 'link2',
      href: '/',
    },
  },
}
