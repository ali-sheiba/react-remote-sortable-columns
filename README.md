# React Remote Sortable Columns

Sort table data using remote api by click and toggle the table columns.

## Example

```js
import React, {Component} from 'react'
import {TR, TH} from 'react-remote-sortable-columns'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {
        sort:      'id',
        direction: 'asc'
      }
    }
  }

  // fetch data for the first time
  componentDidMount() {
    this.props.dispatch(fetchRecords(this.state.params))
  }

  // fetch only when params get updated
  componentDidUpdate(prevProps, prevState) {
    if (this.state.params !== prevState.params) {
      this.props.dispatch(fetchRecords(this.state.params))
    }
  }

  // update params state when sortable column is clicked
  handleSortChange(sort, direction) {
    this.setState({params: {
      ...this.state.params,
      key,
      direction
    }})
  }

  render() {
    const {sort, direction} = this.state.params
    return (
      <table className="table table-hover table-bordered">
        <thead>
          <TR sortKey={sort} sortDir={direction} onChange={this.handleSortChange.bind(this)}>
            <TH column="id">ID</TH>
            <TH column="name" className="w-50">Name</TH>
            <TH column="role">Role</TH>
            <TH column="status">Status</TH>
            <TH>Actions</TH>
          </TR>
        </thead>
        <tbody>
          <tr>
            ....
          </tr>
        </tbody>
      </table>
    )
  }
}
```
