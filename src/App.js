import React from 'react'
import Header from './components/header'
import Search from './components/search'
import Tracks from './components/tracks'
import Footer from './components/footer'

class App extends React.Component {

  constructor () {
    super ()
    this.baseUrl = 'https://api.spotify.com/v1'
    this.audio = null

    this.state = {
      tracks: [],
      trackPlaying: '',
      trackPaused: false,
      loading: false
    }

    this.searchTracks = this.searchTracks.bind(this)
  }

  async searchTracks ({target}) {
      let {value} = target

      if (value) {
        let results = await fetch(`${this.baseUrl}/search?q=${value}&type=track`)
        let {tracks} = await results.json()
        this.setState({tracks: tracks.items})
      }
  }

  playTrack () {

  }

  pauseTrack () {

  }

  render () {
    return (
      <div className="container">
        <Header />
        <Search searchTracks={this.searchTracks} />
        <Tracks tracks={this.state.tracks}/>
      </div>
    )
  }
}

export default App
