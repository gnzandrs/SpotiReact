import React from 'react'
import Header from './header'
import Search from './search'
import Tracks from './tracks'
import Footer from './footer'

export default class Main extends React.Component {

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

    this._searchTracks = this._searchTracks.bind(this)
    this._playTrack = this._playTrack.bind(this)
    this._pauseTrack = this._pauseTrack.bind(this)
  }

  async _searchTracks ({target}) {
      let {value} = target

      if (value) {
        let results = await fetch(`${this.baseUrl}/search?q=${value}&type=track`)
        let {tracks} = await results.json()
        this.setState({tracks: tracks.items})
      }
  }

  _playTrack ({target}, preview, trackId) {
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

  _pauseTrack () {
    this.setState({trackPaused: false})
    this.audio.pause()
  }

  render () {
    return (
      <div className="container">
        <Header />
        <Search searchTracks = {this._searchTracks} />
        <Tracks
          tracks = {this.state.tracks}
          playTrack = {this._playTrack}
          pauseTrack = {this._pauseTrack}
          trackPlaying = {this.state.trackPlaying}
          trackPaused = {this.state.trackPaused}
        />
      </div>
    )
  }
}
