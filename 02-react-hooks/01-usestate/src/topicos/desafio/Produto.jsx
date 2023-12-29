import React, { useState } from 'react';

export default function Produto({ produto }) {
  const [jsonBody, setJsonBody] = useState(null);

  // Função assíncrona para fazer a requisição
  const fetchData = async () => {
    try {
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
      const data = await response.json();
      setJsonBody(data);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  // Chama a função para fazer a requisição quando o componente é renderizado
  fetchData();

  // Renderiza o componente quando jsonBody estiver disponível
  return (
    <div>
      {jsonBody && (
        <div>
          <h1>{jsonBody.id}</h1>
          <p>Preço: R${jsonBody.preco}</p>
          <img src={jsonBody.fotos[0].src} alt={jsonBody.fotos[0].titulo} />
        </div>
      )}
    </div>
  );
}
