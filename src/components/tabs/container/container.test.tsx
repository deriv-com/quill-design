import { render, screen } from 'test-utils'
import Tab from '..'

describe('<Tab.Container/>', () => {
  it('should render correctly', () => {
    render(<Tab.Container id="tab">Container</Tab.Container>)
    const container = screen.getByText('Container')
    expect(container).toBeInTheDocument()
  })
})
