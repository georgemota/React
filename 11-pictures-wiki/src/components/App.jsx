import React from 'react';
import Header from './Header';
import CardFlip from './CardFlip';

function App() {

  const cardsData = [
    {
      image: '/pictures/file1.png',
      title: 'Visitando a los viejitos',
      description: 'Yo y mi amorcito muy requete felices en Peralta.',
      date: '2024-05-02',
    },
    {
      image: 'https://via.placeholder.com/200x300',
      title: 'Título 2',
      description: 'Esta es la descripción de la imagen 2.',
      date: '2024-11-22',
    },
    {
      image: 'https://via.placeholder.com/200x300',
      title: 'Título 3',
      description: 'Esta es la descripción de la imagen 3.',
      date: '2024-11-23',
    },
  ];

  return (
    <div>
      <Header />
      <main style={{ marginTop: '88px' }}>
        {/* Contenido principal de tu página */}

        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
          {cardsData.map((card, index) => (
            <CardFlip
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            date={card.date}
            />
         ))}
        </div>

      </main>
    </div>
  );
}

export default App;
