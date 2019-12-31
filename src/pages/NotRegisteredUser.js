import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'el usuario ya existe o hay algun problema.'

                  return (
                    <UserForm disabled={loading} error={errorMsg} title='REGISTRATE' onSubmit={onSubmit} />
                  )
                }
              }
            </RegisterMutation>

            <LoginMutation>
              {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'Usuario y/o contraseña  incorrectas.'

                  return (
                    <UserForm disabled={loading} error={errorMsg} title='INICIAR SESION' onSubmit={onSubmit} />
                  )
                }
              }
            </LoginMutation>
          </>
        )
      }
    }
  </Context.Consumer>
)
