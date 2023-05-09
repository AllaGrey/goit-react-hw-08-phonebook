import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const Contact = ({ contact: { id, name, phone }}) => {
  const [deleteContact] = useDeleteContactMutation()
  return (
    <Item>
      {name} {phone}
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
