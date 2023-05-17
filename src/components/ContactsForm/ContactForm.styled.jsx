import styled from 'styled-components';
import { Field as FormikField } from 'formik';



export const FormContainer = styled.div`
  width: 350px;
  text-align: center;
  margin-left: auto;
  margin: auto;
  background-color: antiquewhite;
  padding: 30px 20px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 5px;
`;
export const Field = styled(FormikField)`
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
  height: 20px;
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  color: white;
  background-color: green;
  cursor: pointer;

  &:hover{
    background-color: transparent;
  }
`;
