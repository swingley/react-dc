import React from 'react'
import dc from 'dc'
import baseMixin from '../mixins/base-mixin'
import dataTableMixin from '../mixins/data-table-mixin'

@baseMixin
@dataTableMixin
export default class DataTable extends React.Component{
  static displayName = 'DataTable'

  componentDidMount(){
    this.chart = dc.dataTable(this.chart)
    this.configure()
    this.chart.render()
  }
  render(){
    return <table ref={chart => this.chart = chart}></table>
  }
}