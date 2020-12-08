// Node modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Provider from context
import { TestProvider } from './context/TestState'

// Page components
import Planets from './components/pages/Planets'
import SinglePlanet from './components/pages/SinglePlanet'
import ListFilms from './components/pages/ListFilms'
import ListResidents from './components/pages/ListResidents'

// Styles
import './App.scss'

const App = () => {
  return (
    <TestProvider>
      <Router>

        <div>
          <Switch>
            <Route path='/films/:name' render={(props) => ( <ListFilms {...props} /> )} />
            <Route path='/residents/:name' render={(props) => ( <ListResidents {...props} /> )} />
            <Route path='/details/:name' render={(props) => ( <SinglePlanet {...props} /> )} />
            <Route exact path='/' render={() => ( <Planets /> )} />
          </Switch>
        </div>

      </Router>
    </TestProvider>
  )
}

export default App
