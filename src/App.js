import React from 'react'
import Logo from './components/Logo'
import Search from './components/Search'
import Tracks from './components/Tracks'
import Footer from './components/Footer'

class App extends React.Component {

  constructor () {
    super ()
    this.baseUrl = 'https://api.spotify.com/v1'
    this.audio = null
  }

  searchTracks () {

  }

  playTrack () {

  }

  pauseTrack () {

  }

  render() {
    return (
      <div className="Main-app">
        <Logo />
        <Search />
        <Tracks />
        <Footer />
      </div>
    )
  }
}

export default App
