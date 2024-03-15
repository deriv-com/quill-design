import { ComponentProps, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { LabelPairedCircleInfoBoldIcon } from '@deriv/quill-icons/LabelPaired'

import qtMerge from 'qtMerge'
import {
  SectionMessageBaseCVA,
  SectionMessageLinkSizeCVA,
  SectionMessageMessageSizeCVA,
  SectionMessageTitleSizeCVA,
} from '../section-message.classname'
import { VariantProps } from 'class-variance-authority'
import { Text } from 'components/typography'
import Link from 'components/link'
import { ExcludeNull } from 'types'

export interface InformationSectionMessageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'>,
    VariantProps<typeof SectionMessageBaseCVA>,
    ExcludeNull<VariantProps<typeof SectionMessageTitleSizeCVA>, 'size'> {
  title?: ReactNode
  description?: ReactNode
  link1?: ComponentProps<typeof Link>
  link2?: ComponentProps<typeof Link>
}

export const InformationSectionMessage = forwardRef<
  HTMLDivElement,
  InformationSectionMessageProps
>(
  (
    { description, title, size, className, colorStyle, link1, link2, ...rest },
    ref,
  ) => {
    return (
      <div
        className={qtMerge(
          SectionMessageBaseCVA({
            colorStyle,
          }),
          'w-full',
          className,
        )}
        ref={ref}
        {...rest}
        data-testid="dt-info-component"
      >
        <div className="flex items-start gap-gap-md">
          <div>
            <LabelPairedCircleInfoBoldIcon
              iconSize="sm"
              className="fill-status-info"
              data-testid="dt-info-icon"
            />
          </div>
          <div
            className={qtMerge(
              'flex flex-col',
              (title || description) && 'gap-gap-md',
            )}
          >
            <div>
              {title && (
                <Text className={qtMerge(SectionMessageTitleSizeCVA({ size }))}>
                  {title}
                </Text>
              )}
              {description && (
                <Text
                  className={qtMerge(
                    qtMerge(SectionMessageMessageSizeCVA({ size })),
                    title && 'mt-400',
                  )}
                >
                  {description}
                </Text>
              )}
            </div>
            <div className="flex items-start justify-start gap-gap-md">
              {link1 && (
                <Link
                  {...link1}
                  className={qtMerge(
                    SectionMessageLinkSizeCVA({ size }),
                    'p-50 text-solid-slate-1400',
                  )}
                  size={size}
                />
              )}
              {link2 && (
                <Link
                  {...link2}
                  className={qtMerge(
                    SectionMessageLinkSizeCVA({ size }),
                    'p-50 text-solid-slate-1400',
                  )}
                  size={size}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  },
)

InformationSectionMessage.displayName = 'InformationSectionMessage'

export default InformationSectionMessage
