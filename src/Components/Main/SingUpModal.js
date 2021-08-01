import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import './Daialog.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../Api'
import Registration from './Registration'

const Modal = ({ handleClickOpen, handleClose, open }) => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const logined = (e) => {
    e.preventDefault()
    login(email, password).then((res) => {
      loginIn()
    })
  }
  const loginIn = () => {
    const token = localStorage.getItem('token')
    if (token) LoginSucceded()
  }
  const LoginSucceded = () => {
    history.replace('/catalog')
  }
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className={'Daialog'}>
            <form className="form" onSubmit={(e) => logined(e)}>
              <div className={'Dialog__Wrapper'}>
                <input
                  type="email"
                  placeholder="    Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={'Dialog__Wrapper'}>
                <input
                  type="password"
                  placeholder="    Enter Your Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className={'Dialog__Wrapper'}>
                <button id={'button'} type="Submit">
                  Log In
                </button>
              </div>
            </form>
            <Registration />
          </div>
        </Dialog>
      </div>
    </>
  )
}
export default Modal
