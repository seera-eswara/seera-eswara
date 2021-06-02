import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {isLoading: true, langData: []}

  componentDidMount() {
    this.fetchData('ALL')
  }

  fetchData = async selectedLangId => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${selectedLangId}`,
    )

    const jsonData = await response.json()

    const {popular_repos: newItem} = jsonData
    console.log('fetchData', newItem, selectedLangId)

    this.setState({langData: newItem, isLoading: false})
  }

  loading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color=" #0284c7" height={80} width={80} />
    </div>
  )

  fn = id => {
    this.fetchData(id)
  }

  render() {
    const {isLoading, langData} = this.state

    return (
      <div className="bg">
        <h1 className="head">Popular</h1>
        <div className="navBar">
          {languageFiltersData.map(lang => (
            <RepositoryItem key={lang.id} lang={lang} selectLang={this.fn} />
          ))}
        </div>
        {isLoading ? (
          this.loading()
        ) : (
          <LanguageFilterItem langData={langData} />
        )}
        )
      </div>
    )
  }
}

export default GithubPopularRepos
