import React, {Component} from 'react'
import classNames from 'classnames'

class TR extends Component {
  handleClick(key) {
    let {sortKey, sortDir} = this.props
    if (sortKey === key) {
      this.props.onChange(key, sortDir === 'desc'
          ? 'asc'
          : 'desc')
    } else {
      this.props.onChange(key, 'asc')
    }
  }

  render() {
    const {children, sortKey, sortDir} = this.props;

    let childrenWithProps = React
      .Children
      .map(children, child => React.cloneElement(child, {
        handleClick: this.handleClick.bind(this),
        sortKey: sortKey,
        sortDir: sortDir
      }))

    return (
      <tr>
        {childrenWithProps}
      </tr>
    )
  }
}

const TH = ({sortKey, sortDir, children, handleClick, column, ...props}) => {
  const icon = sortDir === 'desc'
    ? 'fa-sort-desc'
    : 'fa-sort-asc'

  return (column
    ? <th
        {...props}
        className={classNames("pointer", props.className)}
        onClick={() => handleClick(column)}
        title="Click to Sort">
        {sortKey === column && <i className={classNames("pull-right fa", icon)}></i>}
        {children}
      </th>
    : <th {...props}>{children}</th>)
}

export {TH, TR}
