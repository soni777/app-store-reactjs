import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  render() {
    const {appDetail} = this.props
    const {appName, imageUrl} = appDetail
    return (
      <li className="app">
        <img className="app-icon" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
