// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = itemDetails

  return (
    <li className="listItem">
      <img className="headImg" src={avatarUrl} alt={name} />
      <>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount}</p>
      </>
      <>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}</p>
      </>
      <>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </>
    </li>
  )
}

export default RepositoryItem
