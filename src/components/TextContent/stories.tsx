import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'
import mockTextContent from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: mockTextContent
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
