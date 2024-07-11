import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Ships from './components/Ships';
import './App.css';

function App() {
  const [ships, setShips] = useState(null);

  useEffect(() => {
    async function getAllStarShips() {
      try {
        let res = await axios.get('https://swapi.dev/api/starships/?format=json');
        setShips(res.data.results);
      } catch (error) {
        console.error("Error fetching starships data", error);
      }
    }

    getAllStarShips();
  }, []);

  console.log('data', ships);

  return (
    <>
      <Navbar />
      <Ships data={ships} />
    </>
  );
}

export default App;
