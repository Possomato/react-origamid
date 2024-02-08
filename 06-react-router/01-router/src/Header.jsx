import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        | <NavLink to="sobre">Sobre</NavLink> |{' '}
        <NavLink to="login">Login</NavLink>
      </nav>
    </div>
  );
}
