import { ComponentProps, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { LabelPairedCircleInfoBoldIcon } from '@deriv/quill-icons/LabelPaired'

import qtMerge, { qtJoin } from 'qtMerge'
import {
  SectionMessageBaseCVA,
  SectionMessageLinkSizeCVA,
  SectionMessageDescriptionSizeCVA,
  SectionMessageTitleSizeCVA,
} from '../section-message.classname'
import { VariantProps } from 'class-variance-authority'
import { Text } from 'components/typography'
import Link from 'components/link'
import { ExcludeNull } from 'types'

export interface InformationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'>,
    VariantProps<typeof SectionMessageBaseCVA>,
    ExcludeNull<VariantProps<typeof SectionMessageTitleSizeCVA>, 'size'> {
  title?: ReactNode
  description?: ReactNode
  link1?: ComponentProps<typeof Link>
  link2?: ComponentProps<typeof Link>
}

export const Information = forwardRef<HTMLDivElement, InformationProps>(
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
        <div className="flex items-start">
          <LabelPairedCircleInfoBoldIcon
            iconSize="sm"
            className="fill-status-info"
            data-testid="dt-info-icon"
          />
          <div className={qtJoin('ml-400')}>
            {title && (
              <Text className={qtJoin(SectionMessageTitleSizeCVA({ size }))}>
                {title}
              </Text>
            )}
            {description && (
              <Text
                className={qtJoin(
                  SectionMessageDescriptionSizeCVA({ size }),
                  title && 'mt-400',
                )}
              >
                {description}
              </Text>
            )}
            <div
              className={qtJoin(
                (title || description) && 'mt-800',
                'flex items-start justify-start gap-gap-md',
              )}
            >
              {link1 && (
                <Link
                  {...link1}
                  className={qtJoin(
                    SectionMessageLinkSizeCVA({ size }),
                    'p-50 text-solid-slate-1400',
                  )}
                  size={size}
                />
              )}
              {link2 && (
                <Link
                  {...link2}
                  className={qtJoin(
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

Information.displayName = 'Information'

export default Information
