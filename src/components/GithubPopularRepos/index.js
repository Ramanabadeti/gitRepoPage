import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    language: languageFiltersData[0].id,
    prefRepoDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRepos()
  }

  languageRepos = id => {
    this.setState({language: id, isLoading: true}, this.getRepos)
  }

  getRepos = async () => {
    const {language} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${language}`
    const response = await fetch(url)
    const data = await response.json()
    const detailsList = data.popular_repos
    const updatedDetails = detailsList.map(details => ({
      name: details.name,
      id: details.id,
      issuesCount: details.issues_count,
      forksCount: details.forks_count,
      starsCount: details.stars_count,
      avatarUrl: details.avatar_url,
    }))
    this.setState({prefRepoDetails: updatedDetails, isLoading: false})
  }

  render() {
    const {prefRepoDetails, isLoading} = this.state

    return (
      <div>
        <h1>Popular</h1>
        <ul>
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              repoDetails={each}
              languageRepos={this.languageRepos}
            />
          ))}
        </ul>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="block">
            {prefRepoDetails.map(each => (
              <RepositoryItem key={each.id} itemDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
