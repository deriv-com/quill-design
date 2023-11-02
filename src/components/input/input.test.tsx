import { render, screen } from 'test-utils'
import Input from '.'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('Should render an Input with default props', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })
  it('Should render an Input with a correctborder classname on hover', async () => {
    render(<Input variant="outline" status="neutral" />)
    const input = screen.getByPlaceholderText(/Placeholder/i)
    await userEvent.hover(input)
    expect(input.parentNode).toHaveClass('hover:border-opacity-black-200')
  })
  it('Should render an Input with a correctborder classname on focus', async () => {
    render(<Input variant="outline" status="neutral" />)
    const input = screen.getByPlaceholderText(/Placeholder/i)
    await userEvent.click(input)
    expect(input.parentNode).toHaveClass(
      'focus-within:border-75 focus-within:border-solid-slate-1400',
    )
  })
  it('Should render a disabled Input', () => {
    const { container } = render(<Input disabled />)
    expect(container).toMatchSnapshot()
  })
  it('Should render an Input with centered text', () => {
    const { container } = render(<Input alignment="center" />)
    expect(container).toMatchSnapshot()
  })
})
