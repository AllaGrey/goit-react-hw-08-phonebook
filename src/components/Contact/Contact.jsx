import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact: { id, name, phone }}) => {
  const dispatch = useDispatch()
  return (
    <Item>
      {name} {phone}
      <Button type="button" onClick={()=>dispatch(deleteContact(id))}>
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
