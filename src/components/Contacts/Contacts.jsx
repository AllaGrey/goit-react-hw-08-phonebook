import { Contact } from 'components/Contact/Contact';
import { getStatusFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';


export const Contacts = () => {

  const filter = useSelector(getStatusFilter)
const {data, isLoading} = useGetContactsQuery()

  let filteredContacts = []

  if (data) {
    filteredContacts = data.filter(contact =>
    (contact.name.toLowerCase().includes(filter.toLowerCase())
    ));
}
  
  return(<>  
    {isLoading && <b>Loading contacts...</b>}
      {filteredContacts.length > 0 && filteredContacts.map(filteredContact => (
      <Contact key={filteredContact.id} contact={filteredContact} />
      ))}
  </>)
  
};
