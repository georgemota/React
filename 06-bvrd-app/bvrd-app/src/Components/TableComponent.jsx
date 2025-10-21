import { useState } from 'react';
import { emisores } from '../data/emisores';
import '../styles.css'

export const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calcular el número de páginas
  const totalPages = Math.ceil(emisores.length / rowsPerPage);

  // Obtener la data de la página actual
  const currentData = emisores.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const currentCount = currentData.length;

  const handleNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));

  const handlePreviousPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  const navigateToDashboardPage = () => window.location.href = "https://dashboard.bvrd.exchange/gruporica";

  return (
    <div className='table-container'>
      <table className='styled-table'>
        <thead>
        <tr>
          <th>Empresa</th>
          <th>Nombre emisor</th>
          <th>Fecha</th>
          <th>Moneda</th>
          <th>NAV</th>
          <th>Instrumento</th>
          <th>Tipo Instrumento</th>
          <th>Categoría</th>
          <th>Dashboard</th>
        </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
           <tr key={index}>
           <td>
              <img
                src={row.img}
                className='img-cell'
              />
            </td>
           <td>
            <a href={row.enlace_sabermas} className='link-cell'>{row.nombre_emisor}</a>
            </td>
           <td>{row.fecha}</td>
           <td>{row.moneda}</td>
           <td>{row.nav}</td>
           <td>{row.instrumento}</td>
           <td>{row.tipo_instrumento}</td>
           <td>{row.categoría}</td>
           <td>
              <img 
                src={row.img_dashboard}
                onClick={navigateToDashboardPage}
                alt={row.dashboard}
                style={{ cursor: 'pointer' }}
                className='dashboard-cell'
              />
            </td> 
         </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <div>
          Mostrando un total {currentCount} de {emisores.length} emisores
        </div>
        <div>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages} </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};