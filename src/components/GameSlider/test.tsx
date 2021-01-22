import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'

import GameSlider from '.'

describe('<GameSlider />', () => {
  it('should render 4 card by default', () => {
    const { container } = renderWithTheme(<GameSlider items={items} />)

    expect(
      container.querySelectorAll('.slick-slide.slick-active')
    ).toHaveLength(4)
  })
  it('should render white arrows color', () => {
    renderWithTheme(<GameSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
