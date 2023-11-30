import { renderHook } from 'test-utils'
import useMounted from '.'

describe('useMounted', () => {
  it('should return true initially', () => {
    const { result } = renderHook(() => useMounted())
    expect(result.current).toBe(true)
  })

  it('should return true after component is mounted', () => {
    const { result, unmount } = renderHook(() => useMounted())

    expect(result.current).toBe(true)

    // Cleanup
    unmount()
  })

  it('should not change state on re-renders', () => {
    const { result, rerender } = renderHook(() => useMounted())

    // Ensure it's true after initial render
    expect(result.current).toBe(true)

    // Re-render
    rerender()

    // Expect it to still be true after re-render
    expect(result.current).toBe(true)
  })
})
