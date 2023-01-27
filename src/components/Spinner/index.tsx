import React from 'react'
import { SpinnerWrapper } from './style'

export const Spinner = () => {
  return (
    <SpinnerWrapper className='loadingSpinnerContainer'>
      <div className="loadingSpinner"></div>
    </SpinnerWrapper>
  )
}
