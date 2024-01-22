import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Contador from './Contador';

export default function Aula() {
  return (
    <GlobalStorage>
      <Contador />
    </GlobalStorage>
  );
}
