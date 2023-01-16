import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 20px;
box-sizing: border-box;
background-color: transparent;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Left = styled.div`
width: 50%;
display: flex;
align-items: center;

img {
    width: 20%;
}

a {
    text-decoration: none;
    font-size: 17px;
    color: #fff;
    margin: 0px 10px;
    text-transform: capitalize;
    letter-spacing: 2px;
}
`

export const Right = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
`

export const Login = styled.button`
border: none;
background-color: transparent;
color: #fff;
font-size: 17px;
margin: 0px 10px;
`

export const Signup = styled.button`
background-color: transparent;
border: 1px solid #fff;
color: #fff;
font-size: 17px;
border-radius: 6px;
padding: 6px 10px;
`