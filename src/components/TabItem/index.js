import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetail, onClickCategory, isActive} = this.props
    const {displayText, tabId} = tabDetail
    const clickCategory = () => {
      onClickCategory(tabId)
    }

    const activeTabBtnClassName = isActive ? 'active tab-btn' : 'tab-btn'

    // const activeHrLineClassName = isActive ? 'hr-line-active' : ''

    return (
      <li>
        <button
          type="button"
          className={activeTabBtnClassName}
          onClick={clickCategory}
        >
          {displayText}
        </button>
        {/* <hr className={`hr-line ${activeHrLineClassName}`} /> */}
      </li>
    )
  }
}

export default TabItem
