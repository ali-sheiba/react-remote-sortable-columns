# React Remote Sortable Columns

[![npm version](https://img.shields.io/npm/v/react-remote-sortable-columns.svg?style=flat-square)](https://www.npmjs.org/package/react-remote-sortable-columns)

Sort table data using remote api by click and toggle the table columns.

--------------------------------------------------------------------------------


### Install via NPM

```
npm install --save react-remote-sortable-columns
```

### Install via Yarn

```
yarn add react-remote-sortable-columns
```

--------------------------------------------------------------------------------


## Components Usage

The package will provide 2 components `TR` and `TH`:

### `TR` Table Row Component Props

Prop       | type       | description
---------- | ---------- | ------------
`sortKey`  | string     | The current sort column name/key
`sortDir`  | string     | The current sort direction
`onChange` | function   | Function will called on column clicked and will pass the column identifier and direction
`children` | components | Header row columns using `<TH ...></TH>` component

### `TH` Table Header Component Props

Prop       | Type       | Description
---------- | ------     | -----------------
`column`   | string     | Column identifier
`children` | components | Column text

Other props will be passed to the `th` component such as `className`, `colSpan` ...etc.

--------------------------------------------------------------------------------

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

          // Here is the TR and TH components
          <TR sortKey={sort} sortDir={direction} onChange={this.handleSortChange.bind(this)}>
            <TH column="id">ID</TH>
            <TH column="name" className="w-50" colSpan={2}>Employee Name</TH>
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

--------------------------------------------------------------------------------

## TODO:

- [ ] allow to customize the internal class names
- [ ] write test

--------------------------------------------------------------------------------

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

--------------------------------------------------------------------------------

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
