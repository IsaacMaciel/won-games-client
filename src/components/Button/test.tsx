import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size when value is passed', () => {
    renderWithTheme(<Button size="small">Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size when value is passed', () => {
    renderWithTheme(<Button size="large">Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>)
    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Won Games</Button>
    )
    expect(screen.getByText(/Won Games/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
