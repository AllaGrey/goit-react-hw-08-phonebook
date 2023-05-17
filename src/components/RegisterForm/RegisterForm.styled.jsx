import styled from "styled-components";
import { Form, Field } from 'formik';

export const RegisterSection = styled.section`
padding: 50px;
`

export const RegisterFormStyled = styled(Form)`
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