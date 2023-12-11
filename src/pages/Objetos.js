// pages/objetos.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const ObjetosPage = () => {
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
      const data = await response.json();
      setObjetos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h2>Lista de Animais</h2>
        {objetos.map((objeto, index) => (
          <Link href='/animais/[id]' as={`/animais/${index}`}>
            <div key={objeto.id}> <p>{objeto.nome}</p></div>
            
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = (async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
  const repo = await res.json()

  const objetos = await repo;
  return {
  props: {objetos}
  }
  })

export default ObjetosPage;
