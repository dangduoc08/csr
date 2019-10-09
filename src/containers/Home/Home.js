import React from 'react'
import logo from '../../assets/logo.svg'

function Home() {
  return (
    <div className='home'>
      <header className='home__header'>
        <img src={logo} className='home__logo' alt='logo' />
        <p>
          Edit <code>src/containers/Home.js</code> and save to reload.
        </p>
        <a
          className='home__link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home