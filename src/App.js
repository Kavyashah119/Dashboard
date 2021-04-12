import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainBody />

        <Switch>
          <Route path="/" />
        </Switch> 
      </Router>


    </>
  )
}

export default App;