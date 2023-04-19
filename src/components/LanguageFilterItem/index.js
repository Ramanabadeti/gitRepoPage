// Write your code here
const LanguageFilterItem = props => {
  const {repoDetails, languageRepos} = props
  const {id, language} = repoDetails

  const handleClick = () => {
    languageRepos(id)
  }
  return (
    <li>
      <button onClick={handleClick} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
