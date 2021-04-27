import React from 'react';
import { Selectors } from '../redux/contacts';

import ContactList from '../components/ContactList';
import Form from '../components/Form';
import Filter from '../components/Filter';

import s from '../App.module.css';
import { useSelector } from 'react-redux';

export default function Contacts() {
  const contacts = useSelector(Selectors.getAllContacts);

  return (
    <div className={s.blocks}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      {!!contacts.length && <h2 className={s.title__contacts}>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
}
