import styled from "styled-components";
import bg from '../../assets/images/bg2.png'

export const Container = styled.div`
width: 100%;
height: 140vh;
background: linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.8) ), url(${bg}) ;
background-size: cover;
background-position: center;
`

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Head = styled.h1`
font-size: 4rem;
color: #fff;
letter-spacing: 2px;
margin-bottom: 15px;
`

export const Brief = styled.p`
color: #fff;
font-size: 2rem;
width: 50%;
`

export const Btns = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Signup = styled.div`
padding: 5px;
margin: 0px 10px;

input {
    padding: 14px 10px;
    width: 300px;
    border: 1px solid #000000;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}
`

export const Create = styled.button`
padding: 11.5px 20px;
font-size: 17px;
color: #fff;
font-weight: 600;
background-color: #670072;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border: 1px solid #670072;

:active, :focus {
    border: 1px solid #fff;
    border-radius: inherit;
}
`

export const Project = styled.button`
box-sizing: border-box;
border-radius: 7px;
border: 2px solid #670072 ;
font-size: 17px;
background: transparent;
color: #fff;
height: fit-content;
padding: 12px 32px;
`