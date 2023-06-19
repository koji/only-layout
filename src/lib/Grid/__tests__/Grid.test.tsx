import { render, screen } from '@testing-library/react'
import { Grid } from '../index'

describe('Grid', async () => {
  it('should render box component with props', () => {
    render(
      <Grid backgroundColor="#fff" gridColumn="2rem">
        test
      </Grid>,
    )
    const grid = screen.getByText('test')
    expect(grid).toHaveStyle('background-color: #fff')
    expect(grid).toHaveStyle('grid-column: 2rem')
    expect(grid.innerHTML).toEqual('test')
  })
})
