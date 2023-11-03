import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '.'
import Post from './mocks/Post'
import { MOCK_DATA } from './mocks/sample-data'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select', options: ['number', 'bullet'] } },
    contentPerPage: { control: 'number' },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const NumberPagination: Story = {
  args: {
    contentPerPage: 5,
    renderComponent: Post,
    dataList: MOCK_DATA,
    variant: 'number',
    className: 'p-general-sm',
  },
}

export const BulletPagination: Story = {
  args: {
    contentPerPage: 20,
    renderComponent: Post,
    dataList: MOCK_DATA,
    variant: 'bullet',
    className: 'p-general-sm',
  },
}
