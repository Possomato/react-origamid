// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

export default function App() {
  const dados = mario;

  const comprasTotaisString = dados.compras.map((item) =>
    item.preco.replace('R$ ', ''),
  );
  const comprasTotaisNumber = comprasTotaisString.map((str) =>
    parseInt(str, 10),
  );
  const comprasTotais = comprasTotaisNumber.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  });

  const verificaSituacao = dados.ativa == true ? 'ativa' : 'inativa';

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: <span className={verificaSituacao}>{verificaSituacao}</span>
      </p>
      <p>Total gasto: R${comprasTotais}</p>
      <p>{comprasTotais >= 10000 ? 'Você está gastando muito.' : ''}</p>
    </>
  );
}
