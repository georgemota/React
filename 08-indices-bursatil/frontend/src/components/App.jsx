import React, { useState, useRef, useEffect } from 'react';
import DataFetcher from '../components/data/DataFetcher';
import Table from '../components/data/Table';
import TableAccionario from '../components/data/TableAccionario';
import Chart from '../components/data/Chart';
import Popup from 'reactjs-popup';
import '../styles/App.css';
import 'reactjs-popup/dist/index.css';
import infoIcon from '../styles/info.svg';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('rf');
  const buttonRefs = {
    rf: useRef(null),
    ac: useRef(null)
  };

  const [lineStyle, setLineStyle] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const activeButton = buttonRefs[selectedOption].current;
    if (activeButton) {
      setLineStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [selectedOption]);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>Índices DO</h1>
        <div className="info-container">
          <span>Información</span>
          <Popup 
  trigger={
    <span 
      style={{ cursor: 'pointer', marginLeft: '8px' }}
      onClick={() => setIsPopupOpen(true)}
    >
      <div className='info-icon'>
        <img src={infoIcon} alt="Información" style={{ width: '23px', height: '22px' }} />
      </div>
    </span>
  } 
  open={isPopupOpen} 
  onClose={() => setIsPopupOpen(false)} 
  modal 
  closeOnDocumentClick 
  className="popup-content"
>
  <div>
    <h3 style={{ textAlign: 'center' }}>Información</h3>
    <p style={{ textAlign: 'justify' }}>
      Los índices bursátiles ofrecen métricas precisas y confiables sobre el comportamiento de mercado en diferentes horizontes de tiempo y monedas. 
      Estos índices son utilizados para evaluar el desempeño de carteras de inversiones.
    </p>
  </div>
</Popup>



        </div>
      </header>

      {/* Contenedor con fondo colorido */}
      <div className="content-container">
        <p>Conoce los índices de República Dominicana, la información se presenta con un retraso de 15 minutos.</p>

        {/* Scroll Menu */}
        <div className="scroll-menu">
        <button 
         ref={buttonRefs.rf} 
         onClick={() => setSelectedOption('rf')} 
        className={selectedOption === 'rf' ? 'active' : ''}
        style={{ fontWeight: selectedOption === 'rf' ? 'bold' : 'normal' }}
        >
        Renta Fija
       </button>

       <button 
       ref={buttonRefs.ac} 
       onClick={() => setSelectedOption('ac')} 
       className={`button ${selectedOption === 'ac' ? 'active' : ''} no-divider`}
      style={{ fontWeight: selectedOption === 'ac' ? 'bold' : 'normal' }}
      >
      Accionario
      </button>

          {/* Línea activa bajo los botones */}
          <div 
            className="active-line" 
            style={{
              left: `${lineStyle.left}px`, 
              width: `${lineStyle.width}px`
            }}
          />
        </div>

        {/* DataFetcher con renderizado condicional */}
        <DataFetcher selectedOption={selectedOption}>
          {(rentaFijaData, accionesData, variacionData) => 
            selectedOption === 'rf' ? (
              <Table data={rentaFijaData} />
            ) : (
              <>
                <TableAccionario data={accionesData} />
                <div className='DivParaGrafico'>
                  <Chart data={accionesData} />
                  <button 
                    className='moreInfoButton' 
                    onClick={() => window.open('https://arm.bvrd.com.do/herramientas/analisisindices/', '_blanck')}
                    title='Al hacer clic en este botón, serás redirigido al sitio web oficial de la Autorregulación de Mercado.'
                  >
                    Más Información
                  </button>
                </div>
              </>
            )
          }
        </DataFetcher>
      </div>
    </div>
  );
};

export default App;
