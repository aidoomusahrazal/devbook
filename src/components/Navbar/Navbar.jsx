import React from 'react'
import logo from '../../assets/images/logo.jpg'
import { Container, Left, Right, Login, Signup } from './NavbarElements'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
        <Left>
            <img src={logo} alt="logo" />
            <Link to="" >Home</Link>
            <Link to="" >About</Link>
            <Link to="" >developers</Link>
        </Left>
        <Right>
            <Login>Sign in</Login>
            <Signup>Sign up</Signup>
        </Right>
    </Container>
  )
}

export default Navbar
