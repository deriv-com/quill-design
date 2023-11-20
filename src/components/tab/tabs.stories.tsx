import type { Meta, StoryObj } from '@storybook/react'
import ExampleTab from './mocks/example'

const meta = {
  title: 'Tab',
  component: ExampleTab,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ExampleTab>

export default meta
type TTabsStory = StoryObj<typeof meta>

export const Primary: TTabsStory = {
  args: {},
}
