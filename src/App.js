import './App.css'

import {Component} from 'react'
import TabItem from './components/TabItem'
import GreetingItem from './components/GreetingItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  changeActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    const {activeTabId} = this.state
    const greetingItem = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTabId,
    )
    console.log(greetingItem)
    return (
      <div className="main-bg">
        <h1>Multilingual Greetings</h1>
        <ul className="tabs-list">
          {languageGreetingsList.map(eachItem => (
            <TabItem
              key={eachItem.id}
              tabItem={eachItem}
              isActive={eachItem.id === activeTabId}
              changeActiveTabId={this.changeActiveTabId}
            />
          ))}
        </ul>
        <div className="greeting-item-container">
          <GreetingItem
            greetingItem={greetingItem[0]}
            key={greetingItem[0].id}
          />
        </div>
      </div>
    )
  }
}

export default App
