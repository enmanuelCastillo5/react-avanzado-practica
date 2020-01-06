import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disable, onClick }) => {
  return (
    <Button disable={disable} onClick={onClick}>
      {children}
    </Button>
  )
}

SubmitButton.protoTypes = {
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
