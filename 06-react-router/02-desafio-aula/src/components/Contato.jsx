import React from 'react';
import styles from './Contato.module.css';
import Head from './Head';
const urlFoto =
  'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="entre em contato" />
      <img src={urlFoto} alt="máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>gabrielb.possomato@gmail.com</li>
          <li>(15) xxxxx-3036</li>
          <li>Iperó - SP</li>
        </ul>
      </div>
    </section>
  );
}
