import {useState, useEffect} from 'react' // 1º passo: Importação dos hooks useState e useEffect do React.
import axios from 'axios' // Importação da biblioteca Axios para realizar requisições HTTP.

export default function App(){

  // Declara um estado chamado 'desenho', inicialmente definido como um array vazio ([]).
  // 'setDesenho' é a função que permite atualizar o estado.
  const [desenho, setDesenho] = useState([])

  // Função assíncrona para buscar dados da API.
  const pegarDados = async () => {
    const Dados = await axios.get('https://api.sampleapis.com/rickandmorty/characters') 
    // Faz uma requisição GET para a API e armazena a resposta na variável 'Dados'.

    setDesenho(Dados.data[0]) 
    // Atualiza o estado 'desenho' com o primeiro objeto retornado pela API.
    // 'Dados.data' é a lista de personagens retornada, e o índice [0] seleciona o primeiro personagem.
  }

  // useEffect é utilizado para executar a função 'pegarDados' assim que o componente é montado.
  useEffect(()=>{
    pegarDados() // Chama a função para buscar os dados.
  },[]) 
  // O array vazio [] garante que o useEffect execute apenas uma vez, na montagem inicial do componente.

  return(
    <>
      <h1>API</h1>
      {/* Título principal para introduzir o conceito de API. */}

      <h2>Application Programming Interface/ Interface de Programação de Aplicações</h2>
      {/* Explicação simples do que significa API. */}

      <article>
        <img src={desenho.image} alt="" />
        {/* Renderiza a imagem do personagem utilizando a propriedade 'image' retornada pela API.
            O atributo 'alt' está vazio, mas pode ser preenchido com uma descrição do personagem. */}

        <h2>{desenho.name}</h2>
        {/* Renderiza o nome do personagem retornado pela API. */}
      </article>
    </>
  )
}