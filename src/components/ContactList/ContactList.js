// import ContactItem from './ContactsListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ children }) => (
  <ul>
    {children}
    {/* {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })} */}
  </ul>
);

ContactsList.prototype = {
  children: PropTypes.node,
};

export default ContactsList;