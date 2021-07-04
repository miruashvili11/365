import {Button} from "@material-ui/core";
import './LogIn.css'
import Daialog from './SingUpModal'
import React, {useEffect} from "react";
import NavLists from "./NavLists";
const LogInButton = ({handleClickOpen,handleClose,open}) => {

    const styled = {
        color : '#fff',
        background: '#61D5DF',
    }

    console.log(open)

    return (
        <div className={'LoginButton'}>
            <Button variant="outlined" style={styled}  onClick={handleClickOpen}>
                SING UP NOW
            </Button>
        </div>
    )
}

export default LogInButton