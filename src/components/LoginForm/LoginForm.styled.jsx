import styled from "styled-components";
import { Form, Field } from 'formik';

export const LoginSection = styled.section`
padding: 50px;
`

export const LoginFormStyled = styled(Form)`
padding: 50px;
display: flex;
flex-direction: column;
align-items: baseline;
gap: 10px;
max-width: 400px;
margin: 0 auto;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Input = styled(Field)`
width: 350px;
text-align: left;
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