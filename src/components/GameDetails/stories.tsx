import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'
import mockGamesDetails from './mock'

export default {
  title: 'GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGamesDetails,

  argTypes: {
    releaseDate: {
      control: 'date'
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Adventure']
      }
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <GameDetails {...args} />
)
