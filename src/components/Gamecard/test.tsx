import { screen, fireEvent } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Gamecard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<Gamecard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gamecard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })

  it('should render price in label', () => {
    renderWithTheme(<Gamecard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-trough in price when promotional', () => {
    renderWithTheme(<Gamecard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('shoudl render a filled Favorite icon when favoriete is true', () => {
    const onFav = jest.fn()
    renderWithTheme(<Gamecard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render correctly gamecard with ribbon', () => {
    renderWithTheme(<Gamecard {...props} favorite ribbon="My Ribbon" />)
    const ribbon = screen.getByText('My Ribbon')

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#F231A5' })
    expect(ribbon).toHaveStyle({ height: '3.6rem', fontSize: '1.4rem' })
  })
})
