import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className={style.header}>
      <ul>
        <li>
          <NavLink className={style.link} to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} to="contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
