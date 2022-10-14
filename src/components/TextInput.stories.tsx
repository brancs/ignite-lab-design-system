import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput";
import { EnvelopeSimple } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <EnvelopeSimple />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address" type="email" />
      </>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Input without icon" type="text" />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}