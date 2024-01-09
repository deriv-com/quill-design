import { render } from '@testing-library/react'

import Flush from './index'
import { Section } from 'components/containers'
import { Text } from 'components/typography'

describe('Accordion - Flush Variant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Flush title="test" content={() => <>test</>} />,
    )
    expect(baseElement).toBeTruthy()
  })
  it('should render the custom content successfully', () => {
    const { baseElement } = render(
      <Flush
        title="test"
        customContent={() => (
          <Section>
            <Text>This is a sample custom content</Text>
          </Section>
        )}
        content={() => <>test</>}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
