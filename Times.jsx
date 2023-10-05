import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import './App.css'

function Times() {

  const [times, setTimes] = useState();
  let {id} = useParams();

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://api.cartola.globo.com/clubes/${id}`);
      const data = await response.json();

      setTimes(data);
      console.log(data);

    }


    fetchData()

  }, [])


  return (
    <>
      {time && (
        <>
        <img src={'https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png'}></img>
          <div className='time'>
          <Link to = {"/Jogadores:id"} ><p>{time.escudos}</p></Link>
          <p>{time.nome_fantasia.toUpperCase()}</p>
          <p>{time.apelido}</p>
          </div>
        </>
      )}
    </>


  )
}

export default Time