import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

export default function App() {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, []);

  if (error) return <p>{error}</p>
  if (loading) return <p>carregando...</p>;
  if (data)
    return (
      <div>
        <h1>Produto favorito: {produto}</h1>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
        <ul>
          {data &&
            data.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
        </ul>
      </div>
    );
}
