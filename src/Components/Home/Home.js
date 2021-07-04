import './Home.css'
import Nav from '../Main/Nav'
import Wrapper from "../Main/Wrapper";
import LogInButton from "../Main/LogInButton";
import React from "react";
import {useState} from 'react'
const Home = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    document.title = '365 DropShip'
    return(
        <div className={'Home'}>
            < Nav
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            />
            < Wrapper/>
            < LogInButton
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            />
        </div>
    )
}

export default Home