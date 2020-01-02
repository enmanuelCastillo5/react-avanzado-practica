import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disable, onClick }) => {
  return (
    <Button disable={disable} onClick={onClick}>
      {children}
    </Button>
  )
}
