import React from 'react'

function Track ({track}) {
  let {url} = track.album.images[1]
  return (
    <article className='track' style={{backgroundImage:  `url(${url})`}}>
      <div className='track__info'>
        <h4>{track.name}</h4>
      </div>
    </article>
  )
}

export default Track
