import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';

export default function Produtos() {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (!produtos) return null;
  return (
    <section className={`${styles.Produtos} animeLeft`}>
      <Head title="Ranek" description="descrição do site Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
}
