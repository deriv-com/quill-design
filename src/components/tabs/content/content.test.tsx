import {
  RenderOptions,
  RenderResult,
  render as rtlRender,
  screen,
} from 'test-utils'
import Tab from '..'
import { TabContextType } from '../container'

const render = (
  ui: React.ReactElement,
  options?: RenderOptions & {
    wrapperProps?: TabContextType
  },
): RenderResult => {
  const { wrapperProps, ...renderOptions } = options || {}
  return rtlRender(ui, {
    wrapper: (props: TabContextType) => (
      <Tab.Container {...props} {...wrapperProps} />
    ),
    ...renderOptions,
  })
}

describe('<Tab.Container/>', () => {
  it('should render only active element', () => {
    render(
      <Tab.Content>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Tab.Content>,
      {
        wrapperProps: {
          activeTab: 0,
          id: 'tab',
        },
      },
    )
    const content = screen.getByText('Panel 1')
    expect(content).toBeInTheDocument()
  })
})
