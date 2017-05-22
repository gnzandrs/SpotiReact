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
    this.playTrack = this.playTrack.bind(this)
    this.pauseTrack = this.pauseTrack.bind(this)
  }

  async searchTracks ({target}) {
      let {value} = target

      if (value) {
        let results = await fetch(`${this.baseUrl}/search?q=${value}&type=track`)
        let {tracks} = await results.json()
        this.setState({tracks: tracks.items})
      }
  }

  playTrack ({target}, preview, trackId) {
    if (this.audio) {
      if (trackId === this.state.trackPlaying) {
        this.audio.play()
        return this.setState({trackPaused: true})
      }

      this.audio.src = preview
      this.audio.play()
    }
    else {
        this.audio = new window.Audio(preview)
        this.audio.play()
    }

    this.setState({trackPlaying: trackId})

    this.audio.addEventListener('ended', (e) => {
      this.setState({trackPlaying: ''})
    })

    this.setState({trackPaused: true})
  }

  pauseTrack () {
    this.setState({trackPaused: false})
    this.audio.pause()
  }

  render () {
    return (
      <div className="container">
        <Header />
        <Search searchTracks={this.searchTracks} />
        <Tracks
          tracks= {this.state.tracks}
          playTrack = {this.playTrack}
          pauseTrack = {this.pauseTrack}
          trackPlaying = {this.state.trackPlaying}
          trackPaused = {this.state.trackPaused}
        />
      </div>
    )
  }
}

export default App
