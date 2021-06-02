import {Component} from 'react'

import './index.css'

class LanguageFilterItem extends Component {
  dispalyFilterLang = langData => {
    // const { fetchedData} = langData
    console.log(langData)

    return langData.map(item => (
      <div>
        <img alt={item.name} src={item.avatar_url} />
        <h1>{item.name} </h1>
        <p>{item.stars_count}</p>
        <p>{item.forks_count}</p>
        <p>{item.issues_count}</p>
      </div>
    ))
  }

  render() {
    const {langData} = this.props

    return this.dispalyFilterLang(langData)
  }
}

export default LanguageFilterItem
