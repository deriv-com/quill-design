import type { Meta, StoryObj } from '@storybook/react'
import { Elevate } from '.'

import { Heading } from 'components/typography'
import {
  StandaloneAndroidIcon,
  StandaloneAppStoreIcon,
  StandaloneAppStoreIosIcon,
  IllustrativeAdvertiseIcon,
} from '@deriv/quill-icons'

const meta = {
  title: 'Components/Accordion/Elevate',
  argTypes: {
    icon: {
      options: ['Android', 'App Store', 'IOS'],
      mapping: {
        Android: StandaloneAndroidIcon,
        'App Store': StandaloneAppStoreIcon,
        IOS: StandaloneAppStoreIosIcon,
      },
    },
  },
  tags: ['autodocs'],
  component: Elevate,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Elevate>

export default meta

type Story = StoryObj<typeof meta>

export const NoIcon: Story = {
  args: {
    title: 'Accordion Elevate',
    subtitle: 'There is no icon in this accordion',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x320"
        alt="Placeholder"
      />
    ),
  },
}

export const ShortContent: Story = {
  args: {
    icon: IllustrativeAdvertiseIcon,
    title: 'Accordion Elevate',
    subtitle: 'This is a test subtitle',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x320"
        alt="Placeholder"
      />
    ),
  },
}

export const LongSubtitle: Story = {
  args: {
    icon: IllustrativeAdvertiseIcon,
    title: 'Accordion Elevate (Long Subtitle)',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    className: '!w-[350px]',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x320"
        alt="Placeholder"
      />
    ),
  },
}

export const LongContent: Story = {
  args: {
    icon: IllustrativeAdvertiseIcon,
    title: 'Accordion Elevate (Long Content)',
    subtitle: 'This is a test subtitle',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x1320"
        alt="Placeholder"
      />
    ),
  },
}

export const CustomContent: Story = {
  args: {
    customContent: () => <Heading.H1>This is a custom content</Heading.H1>,
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x400"
        alt="Placeholder"
      />
    ),
  },
}

export const Disabled: Story = {
  args: {
    title: 'Accordion Elevate (Disabled)',
    expanded: true,
    disabled: true,
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x400"
        alt="Placeholder"
      />
    ),
  },
}
