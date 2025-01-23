import axios from "axios";
import { useEffect,useState } from "react";

export default function App() {


  const [data, setData] = useState([]); 

  const pegarDados = async () => {
      const response = await axios.get("https://api.sampleapis.com/rickandmorty/characters");
      setData(response.data[0]); // Seleciona o primeiro personagem da lista

      // console.log(response.data) <--- verificar no console sé a api está sendo chamada
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <>     
        <div>
          <h1>{data.name}</h1>
          <img src={data.image} alt={data.name} /> {/* Usa a chave "image" retornada pela API */}
        </div>    
    </>
  );
}
