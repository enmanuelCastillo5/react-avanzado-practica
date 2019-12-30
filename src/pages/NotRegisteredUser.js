import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm title='REGISTRATE' onSubmit={activateAuth} />
            <UserForm title='INICIAR SESION' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
