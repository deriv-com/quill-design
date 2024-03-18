import { render, screen } from 'test-utils'
import Information from '.'

describe('Information', () => {
  it('should render title', () => {
    render(<Information title="heading" />)
    const title = screen.getByText('heading')
    expect(title).toBeInTheDocument()
  })
  it('should render description', () => {
    render(<Information description="description" />)
    const description = screen.getByText('description')
    expect(description).toBeInTheDocument()
  })
  it('should render icon', () => {
    render(<Information />)
    const icon = screen.getByTestId('dt-info-icon')
    expect(icon).toBeInTheDocument()
  })
  it('should render first Link', () => {
    render(<Information link1={{ href: '/', children: 'link1' }} />)
    const link1 = screen.getByText('link1')
    expect(link1).toBeInTheDocument()
  })
  it('should render second Link', () => {
    render(<Information link2={{ href: '/', children: 'link2' }} />)
    const link2 = screen.getByText('link2')
    expect(link2).toBeInTheDocument()
  })
  it('should render in blue color', () => {
    render(<Information colorStyle="information" />)
    const messageComponent = screen.getByTestId('dt-info-component')
    expect(messageComponent).toHaveClass('bg-opacity-blue-100')
  })
})
