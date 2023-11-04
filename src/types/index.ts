import { type HTMLAttributes } from 'react'

export type Theme = 'dark' | 'light'

export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type AsProp<T, P> = T extends keyof P
  ? { as?: T; className?: string }
  : never
export type GenericElements<T extends keyof JSX.IntrinsicElements> = Pick<
  JSX.IntrinsicElements,
  T
>

export type TextSize = 'sm' | 'md' | 'lg' | 'xl'

export interface BodyTypographyProps
  extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

export type ExcludeNull<T, Keys extends keyof T> = {
  [K in keyof T]: K extends Keys ? Exclude<T[K], null> : T[K]
}
