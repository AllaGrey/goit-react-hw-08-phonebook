import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsLoading, getStatusFilter } from 'redux/selectors';



export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const contacts = useSelector(getContacts)
  const filter = useSelector(getStatusFilter)

  useEffect(() => {
    dispatch(fetchContacts()) 

}, [dispatch])

  
  const filteredContacts = contacts.filter(contact =>
  (contact.name.toLowerCase().includes(filter.toLowerCase())
  ));
  
  return(<>  
    {isLoading && <b>Loading contacts...</b>}
      {filteredContacts.length > 0 && filteredContacts.map(filteredContact => (
      <Contact key={filteredContact.id} contact={filteredContact} />
      ))}
  </>)
  


};
