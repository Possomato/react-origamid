// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

export default function App() {
  const produtosMaisCaros = produtos.filter((produto) => {
    const precoNumerico = Number(produto.preco.replace('R$', '').trim());
    return precoNumerico > 1500;
  });

  const valores = produtos.map(({ preco }) => Number(preco.replace('R$ ', '')));
  return (
    <ul>
      {produtosMaisCaros.map(({ id, nome, cores }, index) => {
        return (
          <li key={id}>
            <h1>{nome}</h1>
            <p>Preço: R${valores[id - 1]}</p>
            <ul>
              {cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
