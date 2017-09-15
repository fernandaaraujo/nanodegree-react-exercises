import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ol>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array
};

export default ListContacts;