import {Component} from 'react'

import './index.css'

class RepositoryItem extends Component {
  selectLang = () => {
    const {lang, selectLang} = this.props

    selectLang(lang.id)
  }

  render() {
    const {lang} = this.props

    return (
      <div>
        <button onClick={this.selectLang} className="bn" type="submit">
          {lang.language}
        </button>
      </div>
    )
  }
}

export default RepositoryItem
