import styled from "styled-components";

export const Menu = styled.div`
display: flex;
align-items: center;
gap: 10px;

`

export const Button = styled.button`
border: none;
width: 120px;
height: 30px;
background-color: blue;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 14px;

&:hover {
    color: blue;
    background-color: white;
}
`