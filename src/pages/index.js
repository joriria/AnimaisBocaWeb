import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer.js';
import Objetos from './Objetos.js';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Boas vindas ao Bicinhos do BocaWeb!!</h2>
        <p>Esta é a página inicial. Clique no link abaixo para ver os animais e suas devidas descrições.</p>
        <Link href="/Objetos">
          <p>Ver animais</p>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;