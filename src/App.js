// Node modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Provider from context
import { TestProvider } from './context/TestState'

// Page components
import Planets from './components/pages/Planets'

// Styles
import './App.scss'

const App = () => {
  return (
    <TestProvider>
      <Router>

        <div>
          <Switch>
            {/* <Route path='/order-confirmation/*' render={() => ( <DummyPurchaseSuccess /> )} /> */}
            {/* <Route path='/purchaseid/:paymentref' render={() => ( <DummyReviewOrder /> )} /> */}
            <Route exact path='/' render={() => ( <Planets /> )} />
          </Switch>
        </div>

      </Router>
    </TestProvider>
  )
}

export default App
