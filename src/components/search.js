import React from 'react'

function Search ({searchTracks}}) {
  render () {
    return (
        <input
          type = 'text'
          placeholder = 'Write the name of the song...'
          onChange = {searchTracks}
        />
    )
  }
}

export default Search
