import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const Nav = styled.div`
display: flex;
gap: 10px;
`

export const Button = styled(NavLink)`
border: none;
width: 120px;
height: 25px;
background-color: blue;
color: white;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
text-align: center;
padding-top: 8px;
font-size: 14px;

&:hover {
    color: blue;
    background-color: white;
}
`