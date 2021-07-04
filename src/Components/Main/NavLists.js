import FacebookIcon from '@material-ui/icons/Facebook';
import './NavLists.css'
import {Button} from "@material-ui/core";
import WebFont from 'webfontloader'
import React from "react";
import Dialog from "./SingUpModal";
import LogInButton from "./LogInButton";
const NavLists = ({handleClickOpen,handleClose,open,setOpen}) => {

    const styled = {
        color : '#61D5DF',
        border: '1px solid #61D5DF',
    }

    return(
        <div className={'NavLists'}>
            <ul className={'Nav__Items'}>
                <li className={'Nav__Lists'}>ABOUT</li>
                <li className={'Nav__Lists'}>CATALOG</li>
                <li className={'Nav__Lists'}>PRICING</li>
                <li className={'Nav__Lists'}>SUPPLIERS</li>
                <li className={'Nav__Lists'}>HELP CENTER</li>
                <li className={'Nav__Lists'}>BLOG</li>
                <LogInButton
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                />
                <Button onClick={handleClickOpen}>LOGIN</Button>
                <li className={'Nav__Lists'}><FacebookIcon/></li>
            </ul>
            <Dialog
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            />
        </div>
    )
}

export default NavLists