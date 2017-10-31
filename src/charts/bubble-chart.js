import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import colorMixin from '../mixins/color-mixin'
import bubbleMixin from '../mixins/bubble-mixin'

const {any, bool, number, oneOfType} = React.PropTypes

@colorMixin
@coordinateGridMixin
@bubbleMixin
export default class BubbleChart extends BaseChart{
  static displayName = 'BubbleChart'

  componentDidMount(){
    this.chart = dc.bubbleChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
