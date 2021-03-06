import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "context/auth/authContext";
import ContactContext from "context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { clearContacts } = useContext(ContactContext);
  const onLogoutClick = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.name}!</li>
      <li>
        <a href="#!" onClick={onLogoutClick}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <header className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <nav>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
