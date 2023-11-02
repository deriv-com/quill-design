import { Meta, StoryObj } from '@storybook/react'
import Input from '.'
import { StandaloneCircleCheckBoldIcon } from '@deriv/quill-icons'

const meta = {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    statusIcon: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    onChange: () => {},
  },
}

export const DisabledInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    onChange: () => {},
    disabled: true,
  },
}

export const InputWithIcon: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    onChange: () => {},
    status: 'success',
    statusIcon: StandaloneCircleCheckBoldIcon,
  },
}

export const InputWithCenteredText: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    onChange: () => {},
    alignment: 'center',
  },
}
