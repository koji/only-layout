import styled from 'styled-components'

import { styleProps, isntStyleProp } from '../style-props'

import type { PrimitiveComponent } from '../types'

/**
 * Box
 *
 * @component
 */
export const Box: PrimitiveComponent<'div'> = styled.div.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  min-width: 0;
  ${styleProps}
`
