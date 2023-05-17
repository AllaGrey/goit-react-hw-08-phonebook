import { Contact } from 'components/Contact/Contact';
import { getStatusFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { FormContainer } from 'components/ContactsForm/ContactForm.styled';

export const Contacts = () => {

  const filter = useSelector(getStatusFilter)
  const contacts = useSelector(getContacts)
  const isLoading = useSelector(getIsLoading)
  const dispatch = useDispatch()

  let filteredContacts = []

   useEffect(() => {
    dispatch(fetchContacts()) 

}, [dispatch])


  if (contacts) {
    filteredContacts = contacts.filter(contact =>
    (contact.name.toLowerCase().includes(filter.toLowerCase())
    ));
}
  
  return(<>  
    <FormContainer>
      {isLoading && <b>Loading contacts...</b>}
      {filteredContacts.length > 0 && filteredContacts.map(filteredContact => (
      <Contact key={filteredContact.id} contact={filteredContact} />
      ))}
    </FormContainer>
  </>)
  
};
