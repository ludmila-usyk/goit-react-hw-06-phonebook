import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
          <button
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </>
);

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

const findContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  if (filter) {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
  return allContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: findContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);