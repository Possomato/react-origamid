import React from 'react'

function isHome(name){
  return name == 'Home' ? `/` : `/${name}`
}

const Header = ({nameOne, nameTwo, gerador}) => {
  return (
    <header>
      <ul>
        <li>
          <a href={isHome(nameOne)}>{nameOne}</a>
        </li>
        <li>
          <a href={isHome(nameTwo)}>{nameTwo}</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
