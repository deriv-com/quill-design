import { Meta, StoryObj } from '@storybook/react'
import TextField from '.'
import { StandaloneCircleCheckBoldIcon } from '@deriv/quill-icons/Standalone'
import {
  LabelPairedPlaceholderBoldIcon,
  LabelPairedUserRegularIcon,
} from '@deriv/quill-icons'

const meta = {
  title: 'Inputs/Text Field',
  component: TextField,
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
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}
export const DisabledTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'outline',
  },
}
export const SuccessTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
  },
}
export const ErrorTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
  },
}

export const TextFieldWithLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
}

export const SuccessStatusIconTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    statusIcon: StandaloneCircleCheckBoldIcon,
  },
  argTypes: {
    status: {
      table: {
        disable: true,
      },
    },
  },
}

export const StatusMessageTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Status message goes here',
  },
}

export const DoubleStatusMessageTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Status message goes here',
    rightStatusMessage: '0/0',
  },
}

export const SuccessMessageTextFieldWithIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Status message goes here',
    rightStatusMessage: '0/0',
  },
}
export const ErrorMessageTextFieldWithIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
    leftStatusMessage: 'Status message goes here',
    rightStatusMessage: '0/0',
  },
}

export const TextFieldWithDoubleIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Status message goes here',
    rightStatusMessage: '0/0',
    icon: LabelPairedUserRegularIcon,
  },
}
export const TextFieldWithLabelAndIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    icon: LabelPairedPlaceholderBoldIcon,
  },
}
