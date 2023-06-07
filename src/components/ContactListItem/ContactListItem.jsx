import React, { useState } from 'react';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../store/reduser';

const ContactListItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    const updatedContact = { ...contact, name, number };
    dispatch(updateContact(updatedContact));
    setIsEdit(false);
  };

  const handleCancel = () => {
    setName(contact.name);
    setNumber(contact.number);
    setIsEdit(false);
  };

  return (
    <li className={css.item} key={contact.id}>
      <span className={css.decor}></span>
      {isEdit ? (
        <>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <button className={css.btn} onClick={handleSave}>
            Save
          </button>
          <button className={css.btn} onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          {contact.name}: {contact.number}
          <button className={css.btn} onClick={handleEdit}>
            Edit
          </button>
          <button className={css.btn} onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ContactListItem;
