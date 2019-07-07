import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NewStory from './components/NewStory'
import Drafts from './components/Drafts'
import Friends from './components/Friends'


function App() {
  return (
    <Switch>
      <Route path='/newStory' component={NewStory} />
      <Route path='/drafts' component={Drafts} />
      <Route path='/friends' component={Friends} />
      <Route path='*' component={HomePage} />
    </Switch>
  )
}

export default App;
