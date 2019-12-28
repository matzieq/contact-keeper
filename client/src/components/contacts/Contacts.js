import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "context/contact/contactContext";
import ContactItem from "./ContactItem";
import Spinner from "components/layout/Spinner";

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(
    ContactContext
  );

  const displayed = filtered || contacts;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <TransitionGroup>
      {displayed.map(contact => (
        <CSSTransition key={contact._id} timeout={500} classNames="item">
          <ContactItem contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Contacts;
