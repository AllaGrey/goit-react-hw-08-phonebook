import { FormContainer, Label, Button, Title } from './ContactForm.styled';
import { Field } from './ContactForm.styled';
import { Formik, Form } from 'formik';
import { addContact } from 'redux/contactsOperations';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';



export const ContactsForm = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)


  const handleSubmit = (values, { resetForm }) => {
    
    const isDublicate = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === values.name.toLowerCase()
    );
    isDublicate ? alert(`${values.name} is already in contacts.`) : dispatch(addContact(values));
    resetForm();

  
  };

  return (
    <FormContainer>
      <Title>Phonebook</Title>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <Form>
          <Label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
