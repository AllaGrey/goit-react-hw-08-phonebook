import { Container, Title, ContactList } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  
  return (
    <Container>
      <ContactsForm  />
      <Title>Contacts</Title>
      <Filter />
      <ContactList>
        <Contacts  />
      </ContactList>
    </Container>
  );
};
