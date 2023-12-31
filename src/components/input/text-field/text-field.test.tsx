import { render, screen } from 'test-utils'
import TextField from '.'
import userEvent from '@testing-library/user-event'

describe('TextField', () => {
  it('It should render a default TextField', () => {
    const { container } = render(<TextField />)
    expect(container).toMatchSnapshot()
  })
  it('It should handle TextField hover for outline variant', async () => {
    const onHover = jest.fn()
    render(<TextField placeholder="Placeholder" onMouseEnter={onHover} />)
    const input = screen.getByPlaceholderText('Placeholder')
    await userEvent.hover(input)
    expect(onHover).toHaveBeenCalledTimes(1)
    expect(input.parentElement).toHaveClass(
      '[&:has(input:enabled)]:hover:[&:not(:focus-within)]:border-opacity-black-200',
    )
  })
  it('It should handle TextField hover for fill variant', async () => {
    const onHover = jest.fn()
    render(
      <TextField
        placeholder="Placeholder"
        onMouseEnter={onHover}
        variant="fill"
      />,
    )
    const input = screen.getByPlaceholderText('Placeholder')
    await userEvent.hover(input)
    expect(onHover).toHaveBeenCalledTimes(1)
    expect(input.parentElement).toHaveClass(
      '[&:has(input:enabled)]:hover:[&:not(:focus-within)]:bg-opacity-black-100',
    )
  })
  it('It should render a TextField with success status', () => {
    const { container } = render(<TextField status="success" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render a TextField with error status', () => {
    const { container } = render(<TextField status="error" />)
    expect(container).toMatchSnapshot()
  })
})
