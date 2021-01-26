import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined/Email'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.args = {
  icon: <Email />
}
WithError.args = {
  icon: <Email />,
  error: 'has an a error'
}
