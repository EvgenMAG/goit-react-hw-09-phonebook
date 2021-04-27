import s from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Operations, Selectors } from '../../redux/contacts';
import React, { useEffect } from 'react';

export default function ContactList() {
  const initContacts = useDispatch();
  useEffect(() => {
    initContacts(Operations.getContacts());
  }, [initContacts]);

  const removeContact = useDispatch();
  const searchedName = useSelector(Selectors.getSearchedContacts);

  return (
    <ul className={s.contact__list}>
      {searchedName.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact__item}>
            <span className={s.contact__text}>{name}: </span>
            <span className={s.contact__text}>{number}</span>
            <button
              className={s.contact__button}
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
