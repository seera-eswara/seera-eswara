import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import GithubPopularRepos from './components/GithubPopularRepos'
import RepositoryItem from './components/RepositoryItem'

const App = () => (
  <BrowserRouter>
    <GithubPopularRepos />
    <Switch>
      <Route path="/:id" component={RepositoryItem} />
    </Switch>
  </BrowserRouter>
)

export default App
