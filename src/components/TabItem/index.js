import './index.css'

const TabItem = props => {
  const {tabItem, isActive, changeActiveTabId} = props
  const {id, buttonText} = tabItem
  const activeTabClassName = isActive ? 'active-tab-btn' : 'inactive-tab-btn'
  const onChangeActiveTabId = () => {
    changeActiveTabId(id)
  }
  return (
    <li className="tab-item">
      <button
        className={activeTabClassName}
        type="button"
        onClick={onChangeActiveTabId}
      >
        {buttonText}{' '}
      </button>
    </li>
  )
}
export default TabItem
