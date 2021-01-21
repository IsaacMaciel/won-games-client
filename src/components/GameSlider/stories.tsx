import { Story, Meta } from '@storybook/react/types-6-0'
import GameSlider from '.'

import items from './mock'

export default {
  title: 'GameSlider',
  component: GameSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameSlider items={items} {...args} />
  </div>
)
