import { screen } from '@testing-library/react'

import gamesMock from '../../components/GameSlider/mock'
import hightlightMock from '../../components/Highlight/mock'

import Wishlist from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: hightlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render the component Empty when games is empty', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={props.recommendedHighlight}
      />
    )
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(screen.getByText(/your wishlist is empty/i)).toBeInTheDocument()
  })
})
