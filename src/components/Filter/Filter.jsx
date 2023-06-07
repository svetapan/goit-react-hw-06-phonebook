import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../store/reduser';

const Filter = ({ value }) => {
  const dispatch = useDispatch();
  
  const handleInputChange = (event) => {
    const newFilterValue = event.target.value;
    dispatch(filterContact(newFilterValue));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default Filter;