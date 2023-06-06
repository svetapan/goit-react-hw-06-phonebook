import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactsList = ({contacts, onDelete, onEdit}) => {
  const handleDelete = (contactId) => {
    onDelete(contactId);
  };

  return (
    <ul>
       {contacts.map(contact => (
        <ContactListItem 
           key={contact.id}
           contact={contact}
           onDelete={handleDelete}
           onEdit={onEdit}
          />
       ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};