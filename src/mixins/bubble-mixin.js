import React from 'react'
import {withProps} from '../utils'

const {bool, func, number, oneOfType} = React.PropTypes

export default withProps({
  elasticRadius: bool,
  sortBubbleSize: bool,
  maxBubbleRelativeSize: number,
  minRadius: number,
  minRadiusWithLabel: number,
  r: oneOfType([func, number]),
  radiusValueAccessor: func
})
