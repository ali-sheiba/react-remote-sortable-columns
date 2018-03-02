/**
 * React Remote Sortable Columns
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/**
 * TableRow (TR) Component
 */
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
    const {children, sortKey, sortDir, descClass = 'fa fa-sort-desc', ascClass = 'fa fa-sort-asc'} = this.props;

    let childrenWithProps = React.Children.map(children, child => child && React.cloneElement(child, {
      handleClick: this.handleClick.bind(this),
      sortKey: sortKey,
      sortDir: sortDir,
      descClass,
      ascClass
    }))

    return (
      <tr>
        {childrenWithProps}
      </tr>
    )
  }
}

TR.propTypes = {
  sortDir: PropTypes.string,
  sortKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  descClass: PropTypes.string,
  ascClass: PropTypes.string
}


/**
 * TableHeader(TH) Component
 */
const TH = ({sortKey, sortDir, children, handleClick, column, descClass, ascClass, ...props}) => {
  const icon = sortDir === 'desc'
    ? descClass
    : ascClass

  return (column
    ? <th
        {...props}
        className={classNames("pointer", props.className)}
        onClick={() => handleClick(column)}>
        {sortKey === column && <i className={classNames("pull-right", icon)}></i>}
        {children}
      </th>
    : <th {...props}>{children}</th>)
}

TH.propTypes = {
  column: PropTypes.string,
}

export {TH, TR}
