import React from 'react'
import { AppBar,Toolbar,Typography,styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
background:black;
`

const Tabs=styled(NavLink)`
font-Size: 20px;
margin-right:25px;
color:inherit;
text-decoration:none;
`


export default function Navbar() {
  return (
   <Header position='static'>

    <Toolbar>
    <Tabs to="">code for interview</Tabs>
    <Tabs to="/all">all user</Tabs>
    <Tabs to="/add">add user</Tabs>
    <Tabs to ="/edit"> edit user</Tabs>

    </Toolbar>
   </Header>
  )
}
