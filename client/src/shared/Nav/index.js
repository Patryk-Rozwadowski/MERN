import React from 'react';
import Nav from './components/Nav/Nav';
import NavBlack from "./components/NavBlack/NavBlack";

const NavShared = ({variant = '', ...props}) => {

        switch (variant) {
            case 'transition':
                return <Nav />

            case 'black':
                return <NavBlack />

            default:
                return <Nav/>
        }
    }
;

export default NavShared;