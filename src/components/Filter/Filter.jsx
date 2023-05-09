import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  
  const onChangeFilter = event => {
    const filterTarget = event.target.value.trim();
    dispatch(filterContacts(filterTarget))
    
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChangeFilter} />

    </Label>  
  );
};

