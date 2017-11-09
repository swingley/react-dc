import React from 'react'
import {withProps} from '../utils'

const {array, bool, func, number} = React.PropTypes

export default withProps({
  beginSlice: number,
  columns: array,
  endSlice: number,
  order: func,
  showGroups: bool,
  size: number,
  sortBy: func
})