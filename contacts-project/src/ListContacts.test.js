import React from 'react';
import { shallow } from 'enzyme';
import ListContacts from './ListContacts';

describe('test list contact component', () => {
  const props = {
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg"
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg"
      }
    ]
  };

  const listContact = shallow(<ListContacts {...props} />);

  it('should render a contact', () => {
    expect(listContact.find('.contact-list').exists()).toBe(true);
  });

  it('shoudl render a contact data', () => {
    const contactData = listContact.find('.contact-list-item').first();
    expect(contactData.find('.contact-avatar').exists()).toBe(true);
    expect(contactData.find('.contact-details p').at(0).text()).toBe("Michael Jackson");
    expect(contactData.find('.contact-details p').at(1).text()).toBe("michael@reacttraining.com");
  });
});
