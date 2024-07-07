import { useEffect, useState } from "react";
import api from '../services/api'

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscaFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '511aa88fe46781e70257c70ca2a39b09',
          language: 'pt-BR',
          page: 1,
        }
      })

      console.log(response.data.results);
    }

    buscaFilmes();

  }, [])
  return(
    <h1>HOME</h1>
  )
}