import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  const [times, setTimes] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://api.cartola.globo.com/clubes/${id}`);
      const data = await response.json();

      setTime(data);
      console.log(data);
    
    };
    fetchData()
  
      }, [])

  return (
    <>
          <div>


          </div>

    </>
  )
}

export default App
