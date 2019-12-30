import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Logo from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'

export const App = () => {
/*   const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail') */

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </div>
  )
}
