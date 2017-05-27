import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import Main from './components/main'

jQuery(function () {
  ReactDOM.render(
    <Main />,
    document.getElementById('main-app')
  )
})
