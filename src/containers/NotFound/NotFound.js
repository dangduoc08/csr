import React from 'react'

function NotFound() {
  return(
    <div className='not-found'>
      <img style={{ width: '50%' }} src={require('../../assets/images/404.png')} />
    </div>
  )
}

export default NotFound