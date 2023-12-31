import React, { ReactElement } from 'react'
import {
  queries,
  Queries,
  render,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
  renderHook,
} from '@testing-library/react'
import { ThemeProvider } from '../src'
import { BreakpointProvider } from '../src'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BreakpointProvider>
      <ThemeProvider theme="light">{children}</ThemeProvider>
    </BreakpointProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

function customRenderHook<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  render: (initialProps: Props) => Result,
  options?: Omit<
    RenderHookOptions<Props, Q, Container, BaseElement>,
    'wrapper'
  >,
): RenderHookResult<Result, Props> {
  return {
    ...renderHook(render, { wrapper: AllTheProviders, ...options }),
  }
}

export * from '@testing-library/react'
export { customRender as render }
export { customRenderHook as renderHook }
