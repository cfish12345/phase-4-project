import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbarelements';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
               Home
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Boss" >
                    Boss List
                </NavLink>
                <NavLink to="/Item" >
                    Item List
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Tasklist" className={'submitbutton'}>TaskList</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar