import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import { Container, Wrapper, Head, Brief, Btns, Signup, Create, Project } from './HeroElements'

const Hero = () => {
 
  

  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Head>Let's Build from here</Head>
        <Brief>
      
          Harnessed for productivity.Designed for collaboration.
          Celebrated for built-in security. Welcome to plateform developers love.
        </Brief>
        <Btns>
            <Signup>
                <input type="email" placeholder='Email address' />
                <Create>Sign up </Create>
            </Signup>
            
            <Project>Create a Project</Project>
        </Btns>
      </Wrapper>
    </Container>
  )
}

export default Hero
