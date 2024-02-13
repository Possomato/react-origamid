import React, { useState } from 'react';
import styles from './Produto.module.css';
import Head from './Head';
import { useParams } from 'react-router-dom';

export default function Produto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError(`ocorreu um erro | ${erro}`);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className='loading'/>;
  if (error) return <p>{error}</p>;
  if (!produto) return null;
  return (
    <div className={`${styles.Produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`esse é o produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img src={foto.src} key={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>{produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </div>
  );
}
