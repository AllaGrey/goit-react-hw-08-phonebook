import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsOperations';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact: { id, name, number }}) => {
  const dispatch = useDispatch()
  return (
    <Item>
      {name} {number}
       <Button type="button" onClick={() => dispatch(deleteContact(id))}>
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
