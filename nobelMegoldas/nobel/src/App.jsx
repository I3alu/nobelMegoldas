import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Card from './components/Card';

function App() {
  const [nobels, setNobels] = useState([])

  useEffect(() => {
    fetch("https://mathiasz-siofok.edu.hu/nobel/")
      .then(response => response.json())
      .then(data => setNobels(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Layout>
        {nobels.map(item => {
          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              year={item.year}
              person={item.person}
              continent={item.continent}
              country={item.country}
            />
          )
        })}
      </Layout>
    </>
  )
}

export default App
